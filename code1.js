gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDplayButtonObjects1= [];
gdjs.MainMenuCode.GDplayButtonObjects2= [];
gdjs.MainMenuCode.GDSettingsObjects1= [];
gdjs.MainMenuCode.GDSettingsObjects2= [];
gdjs.MainMenuCode.GDNewSpriteObjects1= [];
gdjs.MainMenuCode.GDNewSpriteObjects2= [];
gdjs.MainMenuCode.GDQuitObjects1= [];
gdjs.MainMenuCode.GDQuitObjects2= [];
gdjs.MainMenuCode.GDNewTextObjects1= [];
gdjs.MainMenuCode.GDNewTextObjects2= [];


gdjs.MainMenuCode.asyncCallback12340684 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SettingsMenu", false);
}}
gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.7), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback12340684(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainMenuCode.asyncCallback12343012 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelSelect", false);
}}
gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.7), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback12343012(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.MainMenuCode.GDSettingsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSettingsObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSettingsObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSettingsObjects1[k] = gdjs.MainMenuCode.GDSettingsObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSettingsObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.MainMenuCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.MainMenuCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.MainMenuCode.GDQuitObjects1);
/* Reuse gdjs.MainMenuCode.GDSettingsObjects1 */
gdjs.copyArray(runtimeScene.getObjects("playButton"), gdjs.MainMenuCode.GDplayButtonObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDNewTextObjects1[i].getBehavior("Tween").addObjectPositionXTween2("alrighty", 2000, "easeOutCirc", 3, false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDplayButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDplayButtonObjects1[i].getBehavior("Tween").addObjectPositionXTween2("alrighty", 2300, "easeOutCirc", 3, false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDQuitObjects1[i].getBehavior("Tween").addObjectPositionXTween2("alrighty", 2300, "easeOutCirc", 3, false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDNewSpriteObjects1[i].getBehavior("Tween").addObjectPositionXTween2("alrighty", 2000, "easeOutCirc", 3, false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDSettingsObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSettingsObjects1[i].getBehavior("Tween").addObjectPositionXTween2("alrighty", 2300, "easeOutCirc", 3, false);
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("playButton"), gdjs.MainMenuCode.GDplayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDplayButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDplayButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDplayButtonObjects1[k] = gdjs.MainMenuCode.GDplayButtonObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDplayButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.MainMenuCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.MainMenuCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.MainMenuCode.GDQuitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.MainMenuCode.GDSettingsObjects1);
/* Reuse gdjs.MainMenuCode.GDplayButtonObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDSettingsObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSettingsObjects1[i].getBehavior("Tween").addObjectPositionXTween2("alrighty", 2300, "easeOutCirc", 3, false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDNewSpriteObjects1[i].getBehavior("Tween").addObjectPositionXTween2("alrighty", 2000, "easeOutCirc", 3, false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDQuitObjects1[i].getBehavior("Tween").addObjectPositionXTween2("alrighty", 2300, "easeOutCirc", 3, false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDplayButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDplayButtonObjects1[i].getBehavior("Tween").addObjectPositionXTween2("alrighty", 2300, "easeOutCirc", 3, false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDNewTextObjects1[i].getBehavior("Tween").addObjectPositionXTween2("alrighty", 2000, "easeOutCirc", 3, false);
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.MainMenuCode.GDQuitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDQuitObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDQuitObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDQuitObjects1[k] = gdjs.MainMenuCode.GDQuitObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDQuitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.MainMenuCode.GDSettingsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSettingsObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSettingsObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSettingsObjects1[k] = gdjs.MainMenuCode.GDSettingsObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSettingsObjects1.length = k;
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.MainMenuCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.MainMenuCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.MainMenuCode.GDQuitObjects1);
gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.MainMenuCode.GDSettingsObjects1);
gdjs.copyArray(runtimeScene.getObjects("playButton"), gdjs.MainMenuCode.GDplayButtonObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDplayButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDplayButtonObjects1[i].getBehavior("Tween").addObjectPositionXTween2("alrighty", 1278, "easeOutCirc", 1.5, false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDSettingsObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSettingsObjects1[i].getBehavior("Tween").addObjectPositionXTween2("alrighty", 1278, "easeOutCirc", 1.5, false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDNewSpriteObjects1[i].getBehavior("Tween").addObjectPositionXTween2("alrighty", -(140), "easeOutCirc", 1.5, false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDQuitObjects1[i].getBehavior("Tween").addObjectPositionXTween2("alrighty", 1278, "easeOutCirc", 1.5, false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDNewTextObjects1[i].getBehavior("Tween").addObjectPositionXTween2("alrighty", 40, "easeOutCirc", 1.5, false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDplayButtonObjects1.length = 0;
gdjs.MainMenuCode.GDplayButtonObjects2.length = 0;
gdjs.MainMenuCode.GDSettingsObjects1.length = 0;
gdjs.MainMenuCode.GDSettingsObjects2.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MainMenuCode.GDQuitObjects1.length = 0;
gdjs.MainMenuCode.GDQuitObjects2.length = 0;
gdjs.MainMenuCode.GDNewTextObjects1.length = 0;
gdjs.MainMenuCode.GDNewTextObjects2.length = 0;

gdjs.MainMenuCode.eventsList2(runtimeScene);

return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
