/*:
* @plugindesc 스킬 윈도우를 생성하기 위해 추가한 플러그인 입니다. 기본 뼈대는 아이템 선택 창에서 따왔습니다.
* @author OZ 
* @help 스크립트 명령으로 
* $gameMessage.setSkillChoice(<인게임 변수 번호>,<스킬 타입>) 와 같이 사용 하면 창이 호출됩니다.
* <인게임 변수 번호> : 말 그대로 알만툴 내의 변수 번호를 입력 하면 해당 변수에 SkillId가 저장됩니다.
*                       해당 변수를 툴에서 이용 하시면 됩니다.
* <스킬 타입> : 데이터베이스/유형/스킬 유형 에 나열된 01,02,03.. 에 대응됩니다.
*
*/

//rpg_objects.js
Game_Message.prototype.setSkillChoice = function(variableId, skillType){
	this._skillChoiceVariableId = variableId;
	this._skillChoiceStypeId = skillType;
}
var alias_Game_Message_clear=Game_Message.prototype.clear;
Game_Message.prototype.clear = function(){
	alias_Game_Message_clear.call(this);
	this._skillChoiceVariableId=0;
	this._skillChoiceStypeId=0;
}
Game_Message.prototype.skillChoiceVariableId = function(){
	return this._skillChoiceVariableId;
}
Game_Message.prototype.skillChoiceStypeId = function(){
	return this._skillChoiceStypeId;
}
Game_Message.prototype.isSkillChoice = function(){
	return this._skillChoiceVariableId>0;
}

Game_Interpreter.prototype.setupSkillChoice = function(params) {
     if (!$gameMessage.isBusy()) {
        $gameMessage.setSkillChoice(params[0], params[1] || 2);
        this._index++;
        this.setWaitMode('message');
    }
    return false;
 };

var alias_Game_Message_isBusy=Game_Message.prototype.isBusy;
Game_Message.prototype.isBusy = function(){
    return (this.hasText() || this.isChoice() ||
            this.isNumberInput() || this.isItemChoice()
            || this.isSkillChoice());
    //OZ 17.03.28 added -> || this.isSkillChoice()
}


// Select Item
Game_Interpreter.prototype.command106 = function() {
    if (!$gameMessage.isBusy()) {
        this.setupSkillChoice(this._params);
        this._index++;
        this.setWaitMode('message');
    }
    return false;
};

Game_Interpreter.prototype.setupSkillChoice = function(params) {
    $gameMessage.setSkillChoice(params[0], params[1] || 1);
};


///rpg_objects.js


//rpg_windows.js

var alias_Window_Message_createSubWindows=Window_Message.prototype.createSubWindows;
Window_Message.prototype.createSubWindows=function(){
	alias_Window_Message_createSubWindows.call(this);
	this._skillWindow = new Window_EventSkill(this);
}

//-----------------------------------------------------------------------------
// Window_EventSkill
//
// The window used for the event command [Select Skill].

function Window_EventSkill() {
    this.initialize.apply(this, arguments);
}

Window_EventSkill.prototype = Object.create(Window_ItemList.prototype);
Window_EventSkill.prototype.constructor = Window_EventSkill;

Window_EventSkill.prototype.initialize = function(messageWindow) {
    this._messageWindow = messageWindow;
    var width = Graphics.boxWidth;
    var height = this.windowHeight();
    Window_ItemList.prototype.initialize.call(this, 0, 0, width, height);
    this.openness = 0;
    this.deactivate();
    this.setHandler('ok',     this.onOk.bind(this));
    this.setHandler('cancel', this.onCancel.bind(this));
};

Window_EventSkill.prototype.windowHeight = function() {
    return this.fittingHeight(this.numVisibleRows());
};

Window_EventSkill.prototype.numVisibleRows = function() {
    return 4;
};

Window_EventSkill.prototype.drawItem = function(index) {
    var item = this._data[index];
    if (item) {
        var numberWidth = this.numberWidth();
        var rect = this.itemRect(index);
        rect.width -= this.textPadding();
        this.changePaintOpacity(this.isEnabled(item));
        this.drawItemName(item, rect.x, rect.y, rect.width - numberWidth);
       this.changePaintOpacity(1);
    }
};


Window_EventSkill.prototype.makeSkillList = function(){
	this._data = $gameParty.leader().skills().filter(function(item) {
        return this.includes(item);
    }, this);
    if (this.includes(null)) {
        this._data.push(null);
    }
};

Window_EventSkill.prototype.refresh = function(){
	this.makeSkillList();
    this.createContents();
    this.drawAllItems();
};

Window_EventSkill.prototype.start = function() {
    this.refresh();
    this.updatePlacement();
    this.select(0);
    this.open();
    this.activate();
};

Window_EventSkill.prototype.updatePlacement = function() {
    if (this._messageWindow.y >= Graphics.boxHeight / 2) {
        this.y = 0;
    } else {
        this.y = Graphics.boxHeight - this.height;
    }
};

Window_EventSkill.prototype.includes = function(skill) {
    var stypeId = $gameMessage.skillChoiceStypeId();
    return DataManager.isSkill(skill) && skill.stypeId === stypeId;
};

Window_EventSkill.prototype.isEnabled = function(skill) {
    return true;
};

Window_EventSkill.prototype.onOk = function() {
    var skill = this.item();
    var skillId = skill ? skill.id : 0;
    $gameVariables.setValue($gameMessage.skillChoiceVariableId(), skillId);
    this._messageWindow.terminateMessage();
    this.close();
};

Window_EventSkill.prototype.onCancel = function() {
    $gameVariables.setValue($gameMessage.skillChoiceVariableId(), 0);
    this._messageWindow.terminateMessage();
    this.close();
};



//-----------------------------------------------------------------------------
// Window_Message
//
// The window for displaying text messages.

var alias_Window_Message_SubWindows = Window_Message.prototype.subWindows;
Window_Message.prototype.subWindows = function() {
    return [this._goldWindow, this._choiceWindow,
            this._numberWindow, this._itemWindow,
            this._skillWindow];
            //OZ 17.03.28 for skill selection windows...
};
 
var alias_Window_Message_isAnySubWindowActive = Window_Message.prototype.isAnySubWindowActive;
Window_Message.prototype.isAnySubWindowActive = function() {
    return (this._choiceWindow.active ||
            this._numberWindow.active ||
            this._itemWindow.active ||
            this._skillWindow.active);
            //OZ 17.03.28 added this._skillWindow.active for skillWindow
};

var alias_Window_Message_startInput = Window_Message.prototype.startInput;
Window_Message.prototype.startInput = function() {
    if ($gameMessage.isChoice()) {
        this._choiceWindow.start();
        return true;
    } else if ($gameMessage.isNumberInput()) {
        this._numberWindow.start();
        return true;
    } else if ($gameMessage.isItemChoice()) {
        this._itemWindow.start();
        return true;
    //OZ 17.03.28 for skill selection
    } else if ($gameMessage.isSkillChoice()){
        this._skillWindow.start();
        return true;
    } else {
        return false;
    }
};
///rpg_windows.js