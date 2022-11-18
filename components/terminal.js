import React from 'react';
import Router from 'next/router'
import $ from 'jquery';

//import styles from './widget.module.sass'

export default class Terminal extends React.Component {
  componentDidMount () {

    var cursor = $('#cursor');
    var terminal = $('#terminal');
    var text = ["Anarchist Development DAO<br/>line secure ... booting sequence 4/4 packets<br/>+++++ access granted +++++<br/>type <a class='onclick'>HELP</a> for commands\n\n$> ", ""];
    var commandHistory = [];
    var lineY = 1;
    var index = 0;
    var historyIndex = 0;

    var commands = [
        { name: "clear", function: clearConsole },
        { name: "reset", function: resetConsole },
        { name: "help", function: helpConsole },
        { name: "vision", function: visionConsole },
        { name: "manifesto", function: manifestoConsole },
        { name: "donate", function: donateConsole },
        { name: "support", function: supportConsole },
        { name: "learn", function: learnConsole }
    ]

    function helpConsole() {
        lineY++;
        text[lineY] = ["\n<a class='onclick'>CLEAR / RESET</a> : refresh the terminal log\n<a class='onclick'>DONATE</a> : further the cause\n<a class='onclick'>SUPPORT</a> : about us\n<a class='onclick'>EDUCATION</a> : anarchist training\n<a class='onclick'>VISION</a> : watch videos \n<a class='onclick'>MANIFESTO</a> : read the manifesto\n"];
        printConsole(text);
    }
    
    function learnConsole() {
        lineY++;
        text[lineY] = ["\nloading..."];
        printConsole(text);
        Router.push('/education');
    }    
    
    function supportConsole() {
        lineY++;
        text[lineY] = ["\nloading..."];
        printConsole(text);
        Router.push('/about');
    }    
    
    function donateConsole() {
        lineY++;
        text[lineY] = ["\nloading..."];
        printConsole(text);
        Router.push('/donate');
    }    
    
    function manifestoConsole() {
        lineY++;
        text[lineY] = ["\nloading..."];
        printConsole(text);
        Router.push('/manifesto');
    }    
    
    function visionConsole() {
        lineY++;
        text[lineY] = ["\nloading..."];
        printConsole(text);
        Router.push('/tv');
    }
    
    function clearConsole() {
        text = [];
        lineY = 0;
    }
    
    function resetConsole() {
        clearConsole();
        lineY++;
        text[lineY] = ["Anarchist Development DAO<br/>line secure ... booting sequence 4/4 packets<br/>+++++ access granted +++++<br/>type <a class='onclick'>HELP</a> for commands\n"];
        printConsole(text);
    }

    setInterval(function () {
        cursor.toggleClass('invisible');
    }, 500);
    
    
    function printConsole(text) {
        cursor.remove();
        terminal.html(text);
        terminal.append('<span id="cursor"></span>');
        cursor = $('#cursor');
        var elem = document.getElementById('terminalPane');
        elem.scrollTop = elem.scrollHeight;
    }
    
    function processCommand(rawData) {
        var args = rawData.split(" ");
        var command = args[0];
        commandHistory[historyIndex] += rawData;
        args.shift();
        var unknownComand = true;
        for (var i = 0; i < commands.length; i++) {
            if (command === commands[i].name) {
                commands[i].function(args);
                unknownComand = false;
                break;
            }
        }
        if (unknownComand == true) {
            lineY++;
            text[lineY] = "\nsystem: command not found";
        }
        historyIndex++;
    }
    
    function nextLine() {
        processCommand(text[lineY]);
        if (lineY != 0) {
            lineY++;
            text[lineY] = "\n";
        }
        else
            text[lineY] = "";
    
        text[lineY] += "$> ";
        lineY++;
        text[lineY] = "";
        printConsole(text);
    }
    
    function erase(n) {
        text[lineY] = text[lineY].slice(0, -n);
        index--;
        printConsole(text);
    }
    
    $(function () {
        printConsole(text)
    })
    
    $('html').on('keydown', function (e) {
        e = e || window.event;
        var keyCode = typeof e.which === "number" ? e.which : e.keyCode;
    
        // Backspace? Erase!
        if (keyCode === 8 && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
            e.preventDefault();
            if (index != 0)
                erase(1);
        }
    });
    
    $(document).on("keypress", function (e) {
        // Make sure we get the right event
        e = e || window.event;
        var keyCode = typeof e.which === "number" ? e.which : e.keyCode;
    
        // Which key was pressed?
        switch (keyCode) {
            // ENTER
            case 13:
            {
                nextLine();
                break;
            }
            default:
            {
                var data = String.fromCharCode(keyCode);
                if (data != undefined) {
                    var length = text[lineY].length;
                    text[lineY] += data;
                    index = index + (text[lineY].length - length);
                    printConsole(text);
                }
                break;
            }
        }
    });

  }

  render () {
    return (
      <> 
        {/*<div id="container">*/}
          <div id="terminal-container" className="random">
            <div id="terminal">
                
            </div>
          </div>
        {/*</div>*/}
      </>
    )
  }
}