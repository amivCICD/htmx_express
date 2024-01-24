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
const PORT = process.env.PORT || 8888;

// console.log(__dirname)
// console.log(__dirname + '/dist')

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
// server.use(express.static(__dirname)); // this replaces your GET '/'
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
  <li>:u - undo</li>
  <li>:e - explorer (will create new file or explore existing file)</li>
  <li>:pwd - print working directory</li>
  <li>:ls - show files in directory</li>
  <li>:set nu || number - turn on absolute line numbers</li>
  <li>:m <n> - move line to line n</li>
  <li>ddkP || ddjP - move item up/down a line </li>
  <li></li>
  <li>----Navigation----</li>
  <li>l - right</li>
  <li>h - left</li>
  <li>j - up</li>
  <li>k - down</li>
  <li>l - right</li>
  <li>0 - beginning of line</li>
  <li>$ - end of line</li>
  <li>o - insert below line</li>
  <li>i I - insert where cursor lies</li>
  <li>a A - insert after cursor (append)</li>
  <li>s - insert and delete cursor character</li>
  <li>dd - delete line</li>
  <li>^d ^u - down / up</li>
  <li>:colorscheme ^d</li>
  <li>----Exiting Entering----</li>
  <li>^v - select entire line</li>
  <li>^[ - cancel</li>
  <li>:e ^d - show files in current directory</li>
  <li>:q - quit</li>
  <li>:wq - quit & save</li>
  <li>:w - (write) save</li>
  <li>^z - switch to terminal (fg - foreground to go back to vim) </li>
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

`



function decipher(cb) {
    let rf = getRandomFileName(fileNames)
    fs.readFile(`js_functions/${rf}`, 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            cb(err, null);
        } else {
            const decipherArray = data;
            // console.log(decipherArray);
            cb(null, decipherArray, rf)
        }

    })
}
server.post('/functions', (req, res) => {
    decipher((err, result, rf) => {
        if (err) {
            res.status(500).send('Error Reading File on Server...Please try Again!')
        } else {
            const rfFormat = `<h2 style="margin-bottom:8px;">${rf.slice(0, -4)}</h2><br>`
            // res.setHeader('Content-Length', Buffer.from(result.join(''), 'utf-8').length);
            // res.setHeader('Content-Length', Buffer.from(result, 'utf-8').length);
            // res.setHeader('Content-Type', 'text/plain');
            res.send(`<pre>${rfFormat}${result}</pre>`);

        }
    })

});



server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});
// server.get('/navbar', (req, res) => {
//     res.sendFile(path.join(__dirname, 'navbar.html'))
// });

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
    }())
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