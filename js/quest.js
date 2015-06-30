//The actual quest list
var questList = document.querySelector("#questList ul");

//Clear quests button
var clearQuests = document.querySelector("#questList button");

//Getting quest text from input box and resetting it to empty string
var questBox = document.getElementById("questBox");

//Will hold the actual text in the text box.
var quest;

function createQuestItem() {
    //Creating dynamic html tags
    var questItem = document.createElement("li");
    var checkbox = document.createElement("input");
    var label = document.createElement("label");

    //Checkbox which indicates a completed quest
    checkbox.type = "checkbox";

    //Label which shows your quest objective
    label.innerHTML = quest;

    //Adding elements to list item
    questItem.appendChild(checkbox);
    questItem.appendChild(label);

    //Adding dynamic list item to list
    questList.appendChild(questItem);
}

//Adds a new quest to quest tracker
function addNewQuest() {
    quest = $.trim(questBox.value);
    questBox.value = "";

    if (quest === "") {
        return false;
    }

    createQuestItem();
    toggleClearButton();
}

//This function calculates how many quests you have completed
function removeCompletedQuests() {
    var questListItems = document.querySelectorAll("#questList ul li");
    for (var i = 0; i < questListItems.length; i++) {
        var item = questListItems[i];
        var cb = item.querySelector("input");

        if (cb.checked) {
            questList.removeChild(item);
        }
    }
    
    toggleClearButton();
}

//Shows or removes completed quests clear button.
function toggleClearButton() {
    var questListItems = document.querySelectorAll("#questList ul li");
    if (questListItems.length > 0) {
        clearQuests.style.display = "block";
    } else {
        clearQuests.style.display = "none";
    }
}
