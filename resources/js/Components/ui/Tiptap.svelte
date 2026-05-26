<script>
  import { onMount, onDestroy } from 'svelte';
  import { Editor } from '@tiptap/core';
  import { StarterKit } from '@tiptap/starter-kit';
  import { Image } from '@tiptap/extension-image';
  import { Underline } from '@tiptap/extension-underline';
  import { Subscript } from '@tiptap/extension-subscript';
  import { Superscript } from '@tiptap/extension-superscript';
  import { TextAlign } from '@tiptap/extension-text-align';
  import { Link } from '@tiptap/extension-link';
  import { Table } from '@tiptap/extension-table';
  import { TableRow } from '@tiptap/extension-table-row';
  import { TableCell } from '@tiptap/extension-table-cell';
  import { TableHeader } from '@tiptap/extension-table-header';
  import { 
    Bold, Italic, Underline as UnderlineIcon, Strikethrough, Eraser, 
    Subscript as SubscriptIcon, Superscript as SuperscriptIcon,
    Pilcrow, Heading1, Heading2, Heading3, 
    AlignLeft, AlignCenter, AlignRight, AlignJustify,
    List, ListOrdered, Quote, Minus, Code, 
    Link as LinkIcon, Image as ImageIcon,
    Table as TableIcon, Trash2
  } from 'lucide-svelte';
  import MediaLibraryModal from '../MediaLibraryModal.svelte';

  export let content = '';
  
  let element;
  let editor;
  let isMediaModalOpen = false;

  onMount(() => {
    editor = new Editor({
      element: element,
      extensions: [
        StarterKit,
        Image.configure({
          HTMLAttributes: {
            class: 'rounded-2xl max-w-full my-6 border border-border shadow-sm',
          },
        }),
        Underline,
        Subscript,
        Superscript,
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
        Link.configure({
          openOnClick: false,
          HTMLAttributes: {
            class: 'text-primary underline cursor-pointer',
          },
        }),
        Table.configure({
          resizable: true,
          HTMLAttributes: {
            class: 'min-w-full border-collapse border border-border my-6',
          },
        }),
        TableRow,
        TableHeader,
        TableCell,
      ],
      content: content,
      onTransaction: () => {
        // force re-render so isActive works
        editor = editor;
      },
      onUpdate: ({ editor }) => {
        content = editor.getHTML();
      },
    });
  });

  onDestroy(() => {
    if (editor) {
      editor.destroy();
    }
  });

  // Toggles
  function toggleBold() { editor.chain().focus().toggleBold().run(); }
  function toggleItalic() { editor.chain().focus().toggleItalic().run(); }
  function toggleUnderline() { editor.chain().focus().toggleUnderline().run(); }
  function toggleStrike() { editor.chain().focus().toggleStrike().run(); }
  function clearFormat() { editor.chain().focus().clearNodes().unsetAllMarks().run(); }
  function toggleSubscript() { editor.chain().focus().toggleSubscript().run(); }
  function toggleSuperscript() { editor.chain().focus().toggleSuperscript().run(); }
  
  function setParagraph() { editor.chain().focus().setParagraph().run(); }
  function toggleHeading(level) { editor.chain().focus().toggleHeading({ level }).run(); }
  
  function setTextAlign(align) { editor.chain().focus().setTextAlign(align).run(); }
  
  function toggleBulletList() { editor.chain().focus().toggleBulletList().run(); }
  function toggleOrderedList() { editor.chain().focus().toggleOrderedList().run(); }
  function toggleBlockquote() { editor.chain().focus().toggleBlockquote().run(); }
  function setHorizontalRule() { editor.chain().focus().setHorizontalRule().run(); }
  function toggleCode() { editor.chain().focus().toggleCodeBlock().run(); }

  function toggleLink() {
    const previousUrl = editor.getAttributes('link').href;
    let url = window.prompt('URL Link:', previousUrl || '');
    
    if (url === null) return;
    
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    // Tambahkan https:// jika belum ada protokol
    if (!/^https?:\/\//i.test(url) && !/^mailto:/i.test(url) && !/^tel:/i.test(url) && !url.startsWith('/')) {
      url = 'https://' + url;
    }

    // Jika tidak ada teks yang di-block, insert teks link secara langsung
    if (editor.state.selection.empty) {
      editor.chain().focus().insertContent(`<a href="${url}">${url}</a>`).run();
    } else {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }
  }

  function handleMediaSelect(item) {
    editor.chain().focus().setImage({ src: item.path, alt: item.name }).run();
  }

  function insertTable() {
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  }
  
  function deleteTable() {
    editor.chain().focus().deleteTable().run();
  }

  // Active state checker
  $: isActive = (name, attributes = {}) => editor ? editor.isActive(name, attributes) : false;
</script>

<div class="bg-card border border-border rounded-2xl flex flex-col shadow-sm overflow-hidden min-h-[500px]">
  
  {#if editor}
    <div class="flex items-center gap-1 p-2 border-b border-border bg-foreground/[0.02] flex-wrap">
      
      <!-- Mark toggles -->
      <button type="button" on:click={toggleBold} class="p-2 rounded hover:bg-foreground/10 transition-colors {isActive('bold') ? 'bg-foreground/10 text-primary' : 'text-foreground/70'}" title="Bold"><Bold class="size-4" /></button>
      <button type="button" on:click={toggleItalic} class="p-2 rounded hover:bg-foreground/10 transition-colors {isActive('italic') ? 'bg-foreground/10 text-primary' : 'text-foreground/70'}" title="Italic"><Italic class="size-4" /></button>
      <button type="button" on:click={toggleUnderline} class="p-2 rounded hover:bg-foreground/10 transition-colors {isActive('underline') ? 'bg-foreground/10 text-primary' : 'text-foreground/70'}" title="Underline"><UnderlineIcon class="size-4" /></button>
      <button type="button" on:click={toggleStrike} class="p-2 rounded hover:bg-foreground/10 transition-colors {isActive('strike') ? 'bg-foreground/10 text-primary' : 'text-foreground/70'}" title="Strikethrough"><Strikethrough class="size-4" /></button>
      <button type="button" on:click={clearFormat} class="p-2 rounded hover:bg-foreground/10 transition-colors text-foreground/70" title="Clear Format"><Eraser class="size-4" /></button>
      <button type="button" on:click={toggleSubscript} class="p-2 rounded hover:bg-foreground/10 transition-colors {isActive('subscript') ? 'bg-foreground/10 text-primary' : 'text-foreground/70'}" title="Subscript"><SubscriptIcon class="size-4" /></button>
      <button type="button" on:click={toggleSuperscript} class="p-2 rounded hover:bg-foreground/10 transition-colors {isActive('superscript') ? 'bg-foreground/10 text-primary' : 'text-foreground/70'}" title="Superscript"><SuperscriptIcon class="size-4" /></button>

      <div class="w-px h-5 bg-border mx-1"></div>
      
      <!-- Nodes -->
      <button type="button" on:click={setParagraph} class="p-2 rounded hover:bg-foreground/10 transition-colors {isActive('paragraph') ? 'bg-foreground/10 text-primary' : 'text-foreground/70'}" title="Paragraph"><Pilcrow class="size-4" /></button>
      <button type="button" on:click={() => toggleHeading(1)} class="p-2 rounded hover:bg-foreground/10 transition-colors {isActive('heading', { level: 1 }) ? 'bg-foreground/10 text-primary' : 'text-foreground/70'}" title="Heading 1"><Heading1 class="size-4" /></button>
      <button type="button" on:click={() => toggleHeading(2)} class="p-2 rounded hover:bg-foreground/10 transition-colors {isActive('heading', { level: 2 }) ? 'bg-foreground/10 text-primary' : 'text-foreground/70'}" title="Heading 2"><Heading2 class="size-4" /></button>
      <button type="button" on:click={() => toggleHeading(3)} class="p-2 rounded hover:bg-foreground/10 transition-colors {isActive('heading', { level: 3 }) ? 'bg-foreground/10 text-primary' : 'text-foreground/70'}" title="Heading 3"><Heading3 class="size-4" /></button>

      <div class="w-px h-5 bg-border mx-1"></div>

      <!-- Alignments -->
      <button type="button" on:click={() => setTextAlign('left')} class="p-2 rounded hover:bg-foreground/10 transition-colors {isActive({ textAlign: 'left' }) ? 'bg-foreground/10 text-primary' : 'text-foreground/70'}" title="Align Left"><AlignLeft class="size-4" /></button>
      <button type="button" on:click={() => setTextAlign('center')} class="p-2 rounded hover:bg-foreground/10 transition-colors {isActive({ textAlign: 'center' }) ? 'bg-foreground/10 text-primary' : 'text-foreground/70'}" title="Align Center"><AlignCenter class="size-4" /></button>
      <button type="button" on:click={() => setTextAlign('right')} class="p-2 rounded hover:bg-foreground/10 transition-colors {isActive({ textAlign: 'right' }) ? 'bg-foreground/10 text-primary' : 'text-foreground/70'}" title="Align Right"><AlignRight class="size-4" /></button>
      <button type="button" on:click={() => setTextAlign('justify')} class="p-2 rounded hover:bg-foreground/10 transition-colors {isActive({ textAlign: 'justify' }) ? 'bg-foreground/10 text-primary' : 'text-foreground/70'}" title="Align Justify"><AlignJustify class="size-4" /></button>

      <div class="w-px h-5 bg-border mx-1"></div>
      
      <!-- Lists & Extras -->
      <button type="button" on:click={toggleBulletList} class="p-2 rounded hover:bg-foreground/10 transition-colors {isActive('bulletList') ? 'bg-foreground/10 text-primary' : 'text-foreground/70'}" title="Bullet List"><List class="size-4" /></button>
      <button type="button" on:click={toggleOrderedList} class="p-2 rounded hover:bg-foreground/10 transition-colors {isActive('orderedList') ? 'bg-foreground/10 text-primary' : 'text-foreground/70'}" title="Ordered List"><ListOrdered class="size-4" /></button>
      <button type="button" on:click={toggleBlockquote} class="p-2 rounded hover:bg-foreground/10 transition-colors {isActive('blockquote') ? 'bg-foreground/10 text-primary' : 'text-foreground/70'}" title="Quote"><Quote class="size-4" /></button>
      <button type="button" on:click={setHorizontalRule} class="p-2 rounded hover:bg-foreground/10 transition-colors text-foreground/70" title="Horizontal Rule"><Minus class="size-4" /></button>
      <button type="button" on:click={toggleCode} class="p-2 rounded hover:bg-foreground/10 transition-colors {isActive('codeBlock') ? 'bg-foreground/10 text-primary' : 'text-foreground/70'}" title="Code Block"><Code class="size-4" /></button>

      <div class="w-px h-5 bg-border mx-1"></div>

      <!-- Links & Media & Tables -->
      <button type="button" on:click={toggleLink} class="p-2 rounded hover:bg-foreground/10 transition-colors {isActive('link') ? 'bg-foreground/10 text-primary' : 'text-foreground/70'}" title="Link"><LinkIcon class="size-4" /></button>
      <button type="button" on:click={() => isMediaModalOpen = true} class="p-2 rounded hover:bg-foreground/10 transition-colors text-foreground/70" title="Pustaka Media"><ImageIcon class="size-4" /></button>
      <button type="button" on:click={insertTable} class="p-2 rounded hover:bg-foreground/10 transition-colors text-foreground/70" title="Insert Table"><TableIcon class="size-4" /></button>
      <button type="button" on:click={deleteTable} class="p-2 rounded hover:bg-foreground/10 transition-colors text-foreground/70" title="Delete Table"><Trash2 class="size-4" /></button>

    </div>
  {/if}

  <div bind:this={element} class="tiptap-editor flex-1 w-full p-6 bg-transparent border-none focus:outline-none font-body text-foreground/80 leading-relaxed prose prose-invert max-w-none">
  </div>
</div>

<MediaLibraryModal bind:isOpen={isMediaModalOpen} onSelect={handleMediaSelect} />

<style>
  /* Base Tiptap styles to ensure proper rendering inside the component */
  :global(.tiptap-editor .tiptap) {
    outline: none;
    min-height: 400px;
  }
  :global(.tiptap-editor .tiptap p.is-editor-empty:first-child::before) {
    content: "Write your article content here...";
    float: left;
    color: hsl(var(--foreground) / 0.3);
    pointer-events: none;
    height: 0;
  }
  :global(.tiptap-editor .tiptap h1) { font-size: 2em; font-weight: bold; margin-top: 1em; margin-bottom: 0.5em; font-family: var(--font-display); }
  :global(.tiptap-editor .tiptap h2) { font-size: 1.5em; font-weight: bold; margin-top: 1em; margin-bottom: 0.5em; font-family: var(--font-display); }
  :global(.tiptap-editor .tiptap h3) { font-size: 1.25em; font-weight: bold; margin-top: 1em; margin-bottom: 0.5em; font-family: var(--font-display); }
  :global(.tiptap-editor .tiptap ul) { list-style-type: disc; padding-left: 1.5em; margin-bottom: 1em; }
  :global(.tiptap-editor .tiptap ol) { list-style-type: decimal; padding-left: 1.5em; margin-bottom: 1em; }
  :global(.tiptap-editor .tiptap blockquote) { border-left: 3px solid hsl(var(--primary)); padding-left: 1rem; font-style: italic; color: hsl(var(--foreground)/0.7); }
  :global(.tiptap-editor .tiptap pre) { background: hsl(var(--foreground)/0.05); padding: 1rem; border-radius: 0.5rem; font-family: monospace; }
  
  /* Table Styles */
  :global(.tiptap-editor .tiptap table) {
    border-collapse: collapse;
    margin: 0;
    overflow: hidden;
    table-layout: fixed;
    width: 100%;
  }
  :global(.tiptap-editor .tiptap table td),
  :global(.tiptap-editor .tiptap table th) {
    border: 1px solid hsl(var(--border));
    box-sizing: border-box;
    min-width: 1em;
    padding: 6px 8px;
    position: relative;
    vertical-align: top;
  }
  :global(.tiptap-editor .tiptap table th) {
    background-color: hsl(var(--foreground)/0.05);
    font-weight: bold;
    text-align: left;
  }
</style>
