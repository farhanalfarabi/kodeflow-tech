<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AnalyticsController extends Controller
{
    public function index(Request $request)
    {
        $days = (int) $request->input('period', 7);
        if (!in_array($days, [7, 30, 365])) {
            $days = 7;
        }

        $data = [
            'hasError' => false,
            'errorMessage' => null,
            'isConnected' => false,
            'currentPeriod' => $days
        ];

        try {
            if (empty(env('ANALYTICS_PROPERTY_ID'))) {
                throw new \Exception('ANALYTICS_PROPERTY_ID belum diatur di file .env');
            }

            $period = \Spatie\Analytics\Period::days($days);
            
            // Fetch total visitors and page views
            $totals = \Spatie\Analytics\Facades\Analytics::fetchTotalVisitorsAndPageViews($period);
            $totalVisitors = $totals->sum('activeUsers');
            $totalPageViews = $totals->sum('screenPageViews');

            // Fetch extra metrics (Bounce Rate & Session Duration)
            $totalsSummary = \Spatie\Analytics\Facades\Analytics::get($period, ['bounceRate', 'averageSessionDuration']);
            $firstSummaryRow = $totalsSummary->first() ?? [];

            $bounceRateVal = (float) ($firstSummaryRow['bounceRate'] ?? 0);
            $bounceRatePct = $bounceRateVal < 1 ? $bounceRateVal * 100 : $bounceRateVal;
            $bounceRateFormatted = number_format($bounceRatePct, 1) . '%';

            $avgSessionDurationVal = (float) ($firstSummaryRow['averageSessionDuration'] ?? 0);
            $minutes = floor($avgSessionDurationVal / 60);
            $seconds = round($avgSessionDurationVal % 60);
            $avgSessionDurationFormatted = $minutes > 0 ? "{$minutes}m {$seconds}s" : "{$seconds}s";

            // Formatted Stats
            $data['stats'] = [
                ['title' => 'Total Visitors', 'value' => number_format($totalVisitors), 'trend' => '7 days', 'isUp' => true, 'icon' => 'Users', 'color' => 'text-blue-500', 'bg' => 'bg-blue-500/10'],
                ['title' => 'Page Views', 'value' => number_format($totalPageViews), 'trend' => '7 days', 'isUp' => true, 'icon' => 'Eye', 'color' => 'text-primary', 'bg' => 'bg-primary/10'],
                ['title' => 'Bounce Rate', 'value' => $bounceRateFormatted, 'trend' => 'Avg', 'isUp' => true, 'icon' => 'Activity', 'color' => 'text-emerald-500', 'bg' => 'bg-emerald-500/10'],
                ['title' => 'Session Duration', 'value' => $avgSessionDurationFormatted, 'trend' => 'Avg', 'isUp' => false, 'icon' => 'Clock', 'color' => 'text-amber-500', 'bg' => 'bg-amber-500/10']
            ];

            // Chart Data
            $maxVal = max(
                $totals->max('activeUsers') ?: 1,
                $totals->max('screenPageViews') ?: 1
            );
            $data['chartData'] = $totals->map(function ($item) use ($maxVal) {
                return [
                    'day' => \Carbon\Carbon::parse($item['date'])->format('D'),
                    'visitors' => $item['activeUsers'] ?? 0,
                    'pageViews' => $item['screenPageViews'] ?? 0,
                    'visitorsHeight' => round((($item['activeUsers'] ?? 0) / $maxVal) * 100),
                    'pageViewsHeight' => round((($item['screenPageViews'] ?? 0) / $maxVal) * 100)
                ];
            })->toArray();

            // Top Pages
            $topPages = \Spatie\Analytics\Facades\Analytics::fetchMostVisitedPages($period, 5);
            $data['topPages'] = $topPages->map(function ($item) use ($totalPageViews) {
                $views = $item['screenPageViews'] ?? 0;
                $pct = $totalPageViews > 0 ? round(($views / $totalPageViews) * 100) : 0;
                return [
                    'path' => $item['fullPageUrl'] ?? 'Unknown',
                    'views' => number_format($views),
                    'percentage' => $pct . '%'
                ];
            })->toArray();

            // Traffic Sources
            $sources = \Spatie\Analytics\Facades\Analytics::fetchTopReferrers($period, 4);
            $colors = ['bg-primary', 'bg-blue-500', 'bg-emerald-500', 'bg-amber-500'];
            $data['trafficSources'] = $sources->map(function ($item, $index) use ($totalPageViews, $colors) {
                $views = $item['screenPageViews'] ?? 0;
                $pct = $totalPageViews > 0 ? round(($views / $totalPageViews) * 100) : 0;
                return [
                    'name' => $item['pageReferrer'] ?? 'Direct',
                    'users' => $pct . '%',
                    'color' => $colors[$index % count($colors)]
                ];
            })->toArray();

            // Device Breakdown
            $deviceRaw = \Spatie\Analytics\Facades\Analytics::get($period, ['activeUsers'], ['deviceCategory']);
            $totalDeviceUsers = $deviceRaw->sum('activeUsers') ?: 1; 
            
            $deviceData = [
                'mobile' => 0,
                'desktop' => 0,
                'tablet' => 0
            ];
            
            foreach ($deviceRaw as $row) {
                $cat = strtolower($row['deviceCategory'] ?? '');
                $pct = round((($row['activeUsers'] ?? 0) / $totalDeviceUsers) * 100);
                if (isset($deviceData[$cat])) {
                    $deviceData[$cat] = $pct;
                }
            }
            $data['deviceData'] = $deviceData;

            // Top Countries
            $countries = \Spatie\Analytics\Facades\Analytics::fetchTopCountries($period, 5);
            $data['topCountries'] = $countries->map(function ($item) use ($totalPageViews) {
                $views = $item['screenPageViews'] ?? 0;
                $pct = $totalPageViews > 0 ? round(($views / $totalPageViews) * 100) : 0;
                return [
                    'country' => $item['country'] ?? 'Unknown',
                    'views' => number_format($views),
                    'percentage' => $pct . '%'
                ];
            })->toArray();

            // Top Browsers
            $browsers = \Spatie\Analytics\Facades\Analytics::fetchTopBrowsers($period, 5);
            $data['topBrowsers'] = $browsers->map(function ($item) use ($totalPageViews) {
                $views = $item['screenPageViews'] ?? 0;
                $pct = $totalPageViews > 0 ? round(($views / $totalPageViews) * 100) : 0;
                return [
                    'browser' => $item['browser'] ?? 'Unknown',
                    'views' => number_format($views),
                    'percentage' => $pct . '%'
                ];
            })->toArray();

            // Top Operating Systems
            $os = \Spatie\Analytics\Facades\Analytics::fetchTopOperatingSystems($period, 5);
            $data['topOperatingSystems'] = $os->map(function ($item) use ($totalPageViews) {
                $views = $item['screenPageViews'] ?? 0;
                $pct = $totalPageViews > 0 ? round(($views / $totalPageViews) * 100) : 0;
                return [
                    'os' => $item['operatingSystem'] ?? 'Unknown',
                    'views' => number_format($views),
                    'percentage' => $pct . '%'
                ];
            })->toArray();

            $data['isConnected'] = true;

        } catch (\Exception $e) {
            $data['hasError'] = true;
            $data['errorMessage'] = $e->getMessage();
            $data['isConnected'] = false;
        }

        return Inertia::render('Admin/Analytics/Index', $data);
    }
}
