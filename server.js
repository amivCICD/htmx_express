import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import bodyParser from 'express';
import fs from 'fs';
import { fileNames } from './random_file.js';
import { getRandomFileName } from './random_file.js';
import { javaData1, javaData2, javaData3, javaData4 } from './javaData.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = express();
const PORT = process.env.PORT || 2222;


server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(express.static(__dirname + '/dist'));


{/* <button id="hideBtn" hx-get="/closevscode">Hide VS Code Hotkeys</button><br /> */}

const vsCodeTemplate = `

    <ul style="list-style-type: none; padding: 0;">

        <li>~~~~VSCODE HOTKEYS~~~~</li>
        <li>Ctrl+Shift+K &nbsp;&nbsp; -  Delete line</li>
        <li>Ctrl+Enter &nbsp;&nbsp;&nbsp;&nbsp; - Insert line below</li>
        <li>Ctrl+Shift+Enter- Insert line above</li>
        <li>Ctrl+Shift+\\&nbsp;&nbsp;&nbsp;&nbsp;- Jump to matching bracket</li>
        <li>Ctrl+] / [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Indent/outdent line</li>
        <li>Home / End &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Beginning/end of line</li>
        <li>Ctrl+Home &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- beginning of file</li>
        <li>Ctrl+End &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - end of file</li>
        <li>Ctrl+↑ / ↓ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Scroll line up/down</li>
        <li>Alt+PgUp / PgDn - Scroll page up/down</li>
        <li>Ctrl+Shift+[ &nbsp;&nbsp;&nbsp;- (collapse) region</li>
        <li>Ctrl+Shift+] &nbsp;&nbsp; - (uncollapse) region</li>
        <li>Ctrl+\\ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Split editor</li>
        <li>Ctrl+W &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Close editor</li>
        <li>Ctrl+K F &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Close folder</li>
        <li>Ctrl+Tab&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Open next</li>
        <li>Ctrl+K Ctrl+W&nbsp;&nbsp;&nbsp;- Close All</li>
        <li>Ctrl+K Ctrl+0&nbsp;&nbsp;&nbsp;- Close All Functions</li>
        <li>Ctrl+K ← / → &nbsp;&nbsp;&nbsp;- Move active editor group</li>
        <li>Ctrl+ 1-2-3 &nbsp;&nbsp;&nbsp;&nbsp;- Focus into group</li>
        <li>Ctrl+K Ctrl+X &nbsp;&nbsp;- Trim trailing whitespace</li>
        <li>Ctrl+PageUp/Down- Toggle Btwn open files</li>
        <li>Ctrl+Alt ← / → &nbsp;- Move window to new frame</li>
        <li>Ctrl+F H &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Find & Replace</li>
        <li>Ctrl+K Z (Zen)&nbsp;&nbsp;- (EscX2 exit)</li>
    </ul>
`
const vimTemplate = `
<ul style="list-style-type: none; padding: 0;">
<li>~~~~VIM HOTKEYS~~~~</li>
    <li></li>
    <li>dd -> delete current line</li>
    <li>p -> paste below</li>
    <li>P -> paste above</li>
    <li></li>
    <li>w -> jump forward one word</li>
    <li>e -> jump to end of current word</li>
    <li>b -> jump backward one word</li>
    <li>ge -> jump to the end of previous word</li>
    <li>{/} -> move up/down by paragraph</li>
    <li>% -> jump to closing/opening function bracket</li>
    <li></li>
    <li>() -> move by sentences</li>
    <li>[[]] -> jump between code blocks</li>
    <li>{{}} -> move between bracketed code blocks</li>
    <li></li>
    <li>xp -> swap two letters</li>
    <li>daw -> delete a word</li>
    <li>ciw -> change a word</li>
    <li></li>
    <li>gg -> go to top of file</li>
    <li>G -> go to bottom of file</li>
    <li>H -> go to top of the screen</li>
    <li>M -> go to middle of screen</li>
    <li>L -> go to bottom of screen</li>
    <li>ctrl + d -> move down half a page</li>
    <li>ctrl + u -> move up half a page</li>
    <li>ctrl + b -> move up one full page</li>
    <li>ctrl + f -> move down one full page</li>
    <li></li>
    <li>/word -> search for word in file</li>
    <li>n -> jump to the next match</li>
    <li>N -> jump to the previous match</li>
    <li>:%s/old/new/g -> replace old with new in whole file</li>
    <li>:%s/old/new/gc -> replace with confirmation</li>
    <li>:file -> get current file information</li>
    <li></li>
    <li>u -> undo</li>
    <li>ctrl + r -> redo</li>
    <li>. -> repeat last change</li>
    <li></li>
    <li>i -> insert before cursor</li>
    <li>a -> append after cursor</li>
    <li>I -> insert at start of the line</li>
    <li>o -> open a new line below and enter insert mode</li>
    <li>O -> insert above line</li>
    <li></li>
    <li>C -> cut everything to the right of cursor on same line</li>
    <li>yy -> copy a line</li>
    <li>p -> paste after the cursor</li>
    <li>P -> paste before the cursor</li>
    <li>dd -> cut a line</li>
    <li>cc -> cut a line (or highlight) and go into insert movie</li>
    <li>D -> delete everything to the right of cursor</li>
    <li>examples -> to copy 4 lines, use 3yy; to delete 3 words use d3w</li>
    <li></li>
    <li>v -> visual mode text selection</li>
    <li>V -> start visual line mode</li>
    <li>ctrl + v -> start visual block mode</li>
    <li>y -> copy selection</li>
    <li>d -> delete selection</li>
    <li>examples -> press V and move down 5 lines & press > to indent</li>
    <li></li>
    <li>POWER EDITING</li>
    <li>ctrl + v -> block mode (select columns)</li>
    <li>I -> insert before every selected row</li>
    <li>A -> append after every selected row</li>
    <li>rX -> replace selected text with X</li>
    <li></li>
    <li>>> -> indent a line</li>
    <li><< -> unindent a line</li>
    <li>= -> auto format code</li>
    <li>gg=G -> re-indent the entire file</li>
    <li></li>
    <li>mX -> mark a location, replace X with a letter</li>
    <li>'X -> jump back to that mark</li>
    <li><space> -> jump back to where you were</li>
    <li></li>
    <li>FASTER NAVIGATION WITHIN A LINE</li>
    <li>^ -> go to first non blank character</li>
    <li>g_ -> go to last non blank character</li>
    <li>fx -> jump to next occurrence of x in line</li>
    <li>Fx -> jump backward to x</li>
    <li>tx -> jump right before x</li>
    <li>Tx -> jump left before x</li>
    <li>; -> repeat last character search (f, t, etc.)</li>
    <li>, -> repeat it in reverse</li>
    <li></li>
    <li>MACROS</li>
    <li>-> press qa to start recording into register a</li>
    <li>-> perform commands</li>
    <li>-> press q to stop recording</li>
    <li>-> press @a to replay macro</li>
    <li>-> press @@ to repeat the last macro</li>
    <li>-> 11@a " runs the macro 10 times</li>
    <li></li>
    <li>J -> join the next line with the current one</li>
    <li>gJ -> join lines without spaces</li>
    <li>~ -> toggle case upper/lower</li>
    <li>ctrl + a -> increase a number</li>
    <li>ctrl + x -> decrease a number</li>
    <li></li>
    <li>COMMAND MODE</li>
    <li>:e filename -> open a file</li>
    <li>:w -> save file</li>
    <li>:q -> quit</li>
    <li>:wq -> save & quit</li>
    <li>:q! -> force quit without save</li>
    <li>:bn -> go to next buffer</li>
    <li>:bp -> go to previous buffer</li>
    <li></li>
    <li>NAVIGATING SPLITS</li>
    <li>:vnew -> create a new split with empty buffer (:new for hori)</li>
    <li>:vert term -> create a terminal on other side</li>
    <li>:vsplit | term -> splits screen but with a terminal splitting that screen</li>
    <li>:sp & :vsp -> split and vertical split</li>
    <li>:ctrl + w + v -> vertical split by hotkey</li>
    <li>:q -> close current split</li>
    <li>:close -> close current split</li>
    <li>:only -> closes other splits keeping only the current one</li>
    <li>ctrl + w c -> close the current split</li>
    <li>ctrl + w o -> close all other splits (same as :only)</li>
    <li>ctrl + w w -> move to next split</li>
    <li>ctrl + w h/j/k/l -> move left down up right</li>
    <li>:wincmd H -> move window to the left (:winc H for short)</li>
    <li>:wincmd L -> move window to right</li>
    <li>:wincmd x -> swap two windows</li>
    <li>:wincmd R -> cycle splits around</li>
    <li></li>
    <li>MY PERSONAL CHOICES AS OF 03 15 2025</li>
    <li>:vert edit ~/ULTIMATE_VIM_COMMANDS.TXT</li>
    <li>:vsp | e ~/main.js</li>
    <li></li>
    <li>* -> find next occurrence of the word under the cursor</li>
    <li># -> find previous occurrence</li>
    <li>g* -> like * but matches partial words</li>
    <li>g$ -> like # but matches partial words</li>
    <li>/seach_forward -> self e.g. /word</li>
    <li>?search_backward -> self e.g. ?word</li>
    <li></li>
    <li>QUICK MULTI CURSOR TRICK</li>
    <li>-> search for a word using /word</li>
    <li>-> cgn change the word and go to the next match</li>
    <li>-> . to repeat</li>
    <li></li>
    <li>g~ -> toggle upper/lowercase</li>
    <li>gUU -> makine line uppercase</li>
    <li></li>
    <li>BETTER FILE MANAGEMENT</li>
    <li>:n file.txt -> open file.txt in same vim session</li>
    <li>:sp file.txt -> open file in horizontal split</li>
    <li>:vsp file.txt -> open file in vertical split</li>
    <li>:tabnew file.txt -> open file in a new tab</li>
    <li>gt -> go to next tab</li>
    <li>gT -> go to previous tab</li>
    <li>:ls -> show open buffers</li>
    <li>:b2 -> switch to buffer #1</li>
    <li>q: -> check recent buffer </li>
    <li>@: -> repeat last command</li>
    <li>: ctrl+p || ctrl+n -> cycle through commands</li>
    <li>: ctrl+f -> pull up list of recent commands and cycle, :q to close menu</li>
    <li>: up || down arrows -> scroll through commands</li>
    <li></li>
    <li>COPY AND PASTING LIKE A PRO</li>
    <li>"ay -> copy to register a</li>
    <li>"ap -> paste from register a</li>
    <li>+y -> copy to system clipboard</li>
    <li>+p -> paste from system clipboard</li>
    <li>-> example "ayiw (copy word into register 'a'), paste anywhere with "ap</li>
    <li></li>
    <li>ADVANCED FORMATTING</li>
    <li>:set number -> show numbers on left</li>
    <li>:set relativenumber -> relative nums</li>
    <li>:set list -> show invisibile characters (tabs, spaces)</li>
    <li>:set wrap -> enable/disable word wrapping</li>
    <li>:set spell -> turn on spell check</li>
    <li>gg=G -> auto-indent everything</li>
    <li></li>
    <li>RUNNING SHELL COMMANDS INSIDE VIM</li>
    <li>:!ls -> run ls in the shell</li>
    <li>:!mkdir new_folder -> create folder without leaving vim</li>
    <li>:r !date -> insert current date into file</li>
    <li>!!python -> run current line as python command</li>
    <li>-> example to insert output of a command (like ip) :r !ip a</li>
    <li>:w !python4 -> run code without deleting it (write to python)</li>
    <li>:w !ls -> get terminal command results inside vim</li>
    <li></li>
    <li>SPEED BOOSTED PRODUCTIVITY COMBOS</li>
    <li>g; -> jump to last change</li>
    <li>g, -> jump to previous change</li>
    <li>@: -> repeat last command line command</li>
    <li></li>
    <li>OPEN A TERMINAL IN VIM</li>
    <li>:term -> open wsl terminal</li>
    <li>:term python4 -> open python REPL</li>
    <li>:!python4 -> select lines in visual mode to execute </li>
    <li></li>
    <li>USING CTRL + P</li>
    <li>ctrl + v -> select file and open in vertical split</li>
    <li>ctrl + x -> select file and open in horizontal split</li>
    <li></li>
    <li>GET WORD LINE, WORD, CHAR COUNT</li>
    <li>:w !wc -> shows lwc count in vim</li>
    <li>:%!wc -> shows line, word, char count (warning, it replaces your text)</li>
    <li>:r !wc % -> appends lwc count to vim file</li>
    <li>:!wc % -> pulls you to terminal and shows you lwc count</li>
    <li></li>
    <li>OPTIMIZATIONS FOR VIM</li>
    <li>set ttyfast -> speed up screen redrawing</li>
    <li>set lazyredraw -> redraw only when needed</li>
    <li>set noswapfile -> disable swap files (can slow down commands)</li>
    <li>set timeoutlen=301 -> reduce key timeout delay</li>
    <li>set ttimeoutlen=11 -> reduce terminal key sequence delay</li>
    <li>set autoindent -> copy indentation from previous line</li>
    <li>set smartindent -></li>
    <li>set cindent -> enable C-style indentation</li>
    <li>set shiftwidth=5 -> set indentation width to 4 space</li>
    <li>set tabstop=5 -> set tab width to 4 spaces</li>
    <li>set expandtab -> use spaces instead of tabs (optional)</li>
  </ul>
`
const vimExtended = `
<ul>
  <li><strong>Basic Movements:</strong>
    <ul>
      <li><code>h, j, k, l</code>: Move left, down, up, and right respectively.</li>
      <li><code>w, e, b</code>: Move forward by word, move to the end of the current word, move backward by word.</li>
      <li><code>0, ^, $</code>: Move to the beginning of the line, move to the first non-blank character of the line, move to the end of the line.</li>
      <li><code>gg, G</code>: Move to the beginning of the file, move to the end of the file.</li>
    </ul>
  </li>

  <li><strong>Editing Text:</strong>
    <ul>
      <li><code>i, I, a, A</code>: Enter insert mode (before cursor, beginning of line, after cursor, end of line).</li>
      <li><code>o, O</code>: Open a new line below or above the current line and enter insert mode.</li>
      <li><code>x, dd</code>: Delete character under cursor, delete the whole line.</li>
      <li><code>u, Ctrl-R</code>: Undo, redo.</li>
      <li><code>yy, p</code>: Copy (yank) the current line, paste the copied line.</li>
    </ul>
  </li>

  <li><strong>Visual Mode:</strong>
    <ul>
      <li><code>v</code>: Enter visual mode to select characters.</li>
      <li><code>V</code>: Enter visual line mode to select whole lines.</li>
      <li><code>Ctrl-V</code>: Enter visual block mode to select rectangular blocks.</li>
    </ul>
  </li>

  <li><strong>Indentation:</strong>
    <ul>
      <li><code>>>, <<</code>: Indent right, indent left.</li>
      <li><code>=</code>: Auto-indent selected lines.</li>
    </ul>
  </li>

  <li><strong>Search and Replace:</strong>
    <ul>
      <li><code>/pattern</code>: Search forward for a pattern.</li>
      <li><code>?pattern</code>: Search backward for a pattern.</li>
      <li><code>:s/old/new/g</code>: Substitute "old" with "new" globally in the current line.</li>
      <li><code>:%s/old/new/g</code>: Substitute "old" with "new" globally in the whole file.</li>
    </ul>
  </li>

  <li><strong>Marks:</strong>
    <ul>
      <li><code>ma, 'a, \`a</code>: Set mark 'a', jump to line of mark 'a', jump to exact position of mark 'a'.</li>
    </ul>
  </li>

  <li><strong>Buffers and Files:</strong>
    <ul>
      <li><code>:e filename</code>: Open a file.</li>
      <li><code>:w</code>: Save the file.</li>
      <li><code>:q</code>: Quit Vim.</li>
      <li><code>:wq or ZZ</code>: Save and quit.</li>
    </ul>
  </li>

  <li><strong>Macros:</strong>
    <ul>
      <li><code>qa, q</code>: Record a macro to register 'a', stop recording.</li>
      <li><code>@a</code>: Execute the macro in register 'a'.</li>
    </ul>
  </li>

  <li><strong>Splitting Windows:</strong>
    <ul>
      <li><code>:split</code>: Split window horizontally.</li>
      <li><code>:vsplit</code>: Split window vertically.</li>
      <li><code>Ctrl-w, w</code>: Switch between windows.</li>
    </ul>
  </li>
</ul>

`;



function decipher(cb) {
    let rf = getRandomFileName(fileNames)
    fs.readFile(`js_functions/${rf}`, 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            cb(err, null);
        } else {
            const decipherArray = data;
            cb(null, decipherArray, rf);
        }

    })
}
server.post('/functions', (req, res) => {
    decipher((err, result, rf) => {
        if (err) {
            res.status(500).send('Error Reading File on Server...Please try Again!')
        } else {
            const rfFormat = `<h2 style="margin-bottom:8px;">${rf.slice(0, -4)}</h2><br>`
            res.send(`<pre>${rfFormat}${result}</pre>`);

        }
    })

});



server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

server.post('/vscode', (req, res) => {
    res.send(vsCodeTemplate);
});

server.post('/vim', (req, res) => {
    res.send(vimTemplate);
});
server.post('/vimextended', (req, res) => {
    res.send(vimExtended);
})

server.get('/javadata', (req, res) => {
    const data = [javaData1, javaData2, javaData3, javaData4];
    (function sendRandomData()
    {
        let randomData = Math.floor(Math.random() * data.length);
        res.send(data[randomData]);
    }());
})

server.post('/clicked', (req, res) => {
    res.send('Out HTML')
});

server.get('/clickdiv', (req, res) => {
    res.send('one thing, two things, three things')
})

server.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}~`);
});

// test line
