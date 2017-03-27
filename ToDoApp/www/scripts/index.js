/* 
Author: Matthew Lane (200214586)
DOC: 01/02/2017
Purpose: A ToDo list program, written in HTML and JS to be run on an android emulator (cordova).
File: This is the JavaScript area of the application. The buttons are connected here. 
*/

(function () {
    "use strict";

    //Watch for user button presses
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

     
    var firstOpenSpot = 0;//This object is used to locate the first element in the array, which contains a 0, meaning it is a free spot.
    var taskArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//The array starts filled with 0's as every spot is free
    var detailsArray = ["", "", "", "", "", "", "", "", "", ""];//This array holds the details info, so it starts empty
 
    //The user wants to add a task. If they have entered a task, add it to the list!
    document.getElementById("Add").onclick = function () {

        //Is there a task in the box to add...? If not, leave.
        if (document.getElementById("display").value == "")
            return;

        //We have a task, find the first open spot for it
        firstOpenSpot = taskArray.indexOf(0);

        //No spot found, the array is full. Notify the user. 
        if (firstOpenSpot < 0) {
            alert("Clear some tasks before trying to add more!");
            return;
        }

        //We have a task, we have a spot, store the task.
        else
        {
            document.getElementById("ToDo" + firstOpenSpot).value = document.getElementById("display").value;

            document.getElementById("remove" + firstOpenSpot).disabled = false; // There is a task loaded, we must give them the option to delete it now
            document.getElementById("display").value = ""; // Clear the display box for the next task. 
            taskArray[firstOpenSpot] = 1; // This spot is no longer free. 
        }
    };

    document.getElementById("AddDetails").onclick = function () {

        if (document.getElementById("detailsSpan").textContent == "") 
        {
            document.getElementById("detailsSpan").textContent = (document.getElementById("ToDoDetails").value);//Post their notes in the details section
            detailsArray[0] = document.getElementById("detailsSpan").textContent;//Save the details to the array
        }

        else 
        {
            document.getElementById("detailsSpan").textContent = (document.getElementById("detailsSpan").textContent + ", " + document.getElementById("ToDoDetails").value);//Post their notes in the details section
            detailsArray[0] = document.getElementById("detailsSpan").textContent;//Save the details to the array
        }
    }

    /* This section connects the buttons to delete tasks completely. */
    document.getElementById("remove0").onclick = function () {
        taskArray[0] = 0;//In the array, 0 means a spot is free, 1 means a spot is taken. When we delete a task, we must clear the spot saying it is there. 
        document.getElementById("ToDo0").value = ""; //Clear the task from the list
        document.getElementById("remove0").disabled = true;// Disable the button to remove the task, since there is no task
        document.getElementById("ToDo0").disabled = false;//If the user previously checked the task as "Done" clear this since we are deleting the task. 
    };
    document.getElementById("remove1").onclick = function () {
        taskArray[1] = 0;
        document.getElementById("ToDo1").value = "";
        document.getElementById("remove1").disabled = true;
        document.getElementById("ToDo1").disabled = false;
    };
    document.getElementById("remove2").onclick = function () {
        taskArray[2] = 0;
        document.getElementById("ToDo2").value = "";
        document.getElementById("remove2").disabled = true;
        document.getElementById("ToDo2").disabled = false;
    };
    document.getElementById("remove3").onclick = function () {
        taskArray[3] = 0;
        document.getElementById("ToDo3").value = "";
        document.getElementById("remove3").disabled = true;
        document.getElementById("ToDo3").disabled = false;
    };
    document.getElementById("remove4").onclick = function () {
        taskArray[4] = 0;
        document.getElementById("ToDo4").value = "";
        document.getElementById("remove4").disabled = true;
        document.getElementById("ToDo4").disabled = false;
    };
    document.getElementById("remove5").onclick = function () {
        taskArray[5] = 0;
        document.getElementById("ToDo5").value = "";
        document.getElementById("remove5").disabled = true;
        document.getElementById("ToDo5").disabled = false;
    };
    document.getElementById("remove6").onclick = function () {
        taskArray[6] = 0;
        document.getElementById("ToDo6").value = "";
        document.getElementById("remove6").disabled = true;
        document.getElementById("ToDo6").disabled = false;
    };
    document.getElementById("remove7").onclick = function () {
        taskArray[7] = 0;
        document.getElementById("ToDo7").value = "";
        document.getElementById("remove7").disabled = true;
        document.getElementById("ToDo7").disabled = false;
    };
    document.getElementById("remove8").onclick = function () {
        taskArray[8] = 0;
        document.getElementById("ToDo8").value = "";
        document.getElementById("remove8").disabled = true;
        document.getElementById("ToDo8").disabled = false;
    };
    document.getElementById("remove9").onclick = function () {
        taskArray[9] = 0;
        document.getElementById("ToDo9").value = "";
        document.getElementById("remove9").disabled = true;
        document.getElementById("ToDo9").disabled = false;
    };

    /* This section connects the check boxes with their functions, so the user can disable completed tasks. */
    document.getElementById("Done0").onclick = function () {
        if(document.getElementById("Done0").checked)
            document.getElementById("ToDo0").disabled = true;
        else
            document.getElementById("ToDo0").disabled = false;
    };

    document.getElementById("Done1").onclick = function () {
        if (document.getElementById("Done1").checked)
            document.getElementById("ToDo1").disabled = true;
        else
            document.getElementById("ToDo1").disabled = false;
    };

    document.getElementById("Done2").onclick = function () {
        if (document.getElementById("Done2").checked)
            document.getElementById("ToDo2").disabled = true;
        else
            document.getElementById("ToDo2").disabled = false;
    };

    document.getElementById("Done3").onclick = function () {
        if (document.getElementById("Done3").checked)
            document.getElementById("ToDo3").disabled = true;
        else
            document.getElementById("ToDo3").disabled = false;
    };

    document.getElementById("Done4").onclick = function () {
        if (document.getElementById("Done4").checked)
            document.getElementById("ToDo4").disabled = true;
        else
            document.getElementById("ToDo4").disabled = false;
    };

    document.getElementById("Done5").onclick = function () {
        if (document.getElementById("Done5").checked)
            document.getElementById("ToDo5").disabled = true;
        else
            document.getElementById("ToDo5").disabled = false;
    };

    document.getElementById("Done6").onclick = function () {
        if (document.getElementById("Done6").checked)
            document.getElementById("ToDo6").disabled = true;
        else
            document.getElementById("ToDo6").disabled = false;
    };

    document.getElementById("Done7").onclick = function () {
        if (document.getElementById("Done7").checked)
            document.getElementById("ToDo7").disabled = true;
        else
            document.getElementById("ToDo7").disabled = false;
    };

    document.getElementById("Done8").onclick = function () {
        if (document.getElementById("Done8").checked)
            document.getElementById("ToDo8").disabled = true;
        else
            document.getElementById("ToDo8").disabled = false;
    };

    document.getElementById("Done9").onclick = function () {
        if (document.getElementById("Done9").checked)
            document.getElementById("ToDo9").disabled = true;
        else
            document.getElementById("ToDo9").disabled = false;
    };

    /* Required by Cordova */
    function onDeviceReady() {  
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();