<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LeadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Lead::orderBy('created_at', 'desc');

        if ($request->has('search') && $request->search) {
            $search = $request->search;
            $query->where(function($q) use ($search) {
                $q->where('name', 'ilike', "%{$search}%")
                  ->orWhere('company_name', 'ilike', "%{$search}%")
                  ->orWhere('message', 'ilike', "%{$search}%");
            });
        }

        $leads = $query->paginate(10)->withQueryString();

        return Inertia::render('Admin/Leads/Index', [
            'leads' => $leads,
            'filters' => [
                'search' => $request->search ?? '',
            ]
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $lead = Lead::findOrFail($id);
        $lead->delete();

        return redirect()->route('admin.leads.index')->with('success', 'Lead berhasil dihapus.');
    }
}
