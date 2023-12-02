gdjs.SettingsMenuCode = {};
gdjs.SettingsMenuCode.GDMusicSliderObjects1= [];
gdjs.SettingsMenuCode.GDMusicSliderObjects2= [];
gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1= [];
gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects2= [];
gdjs.SettingsMenuCode.GDNewTextObjects1= [];
gdjs.SettingsMenuCode.GDNewTextObjects2= [];
gdjs.SettingsMenuCode.GDSquareWhiteSliderObjects1= [];
gdjs.SettingsMenuCode.GDSquareWhiteSliderObjects2= [];


gdjs.SettingsMenuCode.asyncCallback12374100 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}
gdjs.SettingsMenuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.6), (runtimeScene) => (gdjs.SettingsMenuCode.asyncCallback12374100(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SettingsMenuCode.asyncCallback12378692 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}
gdjs.SettingsMenuCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.6), (runtimeScene) => (gdjs.SettingsMenuCode.asyncCallback12378692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SettingsMenuCode.asyncCallback12379716 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}
gdjs.SettingsMenuCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.6), (runtimeScene) => (gdjs.SettingsMenuCode.asyncCallback12379716(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SettingsMenuCode.asyncCallback12380276 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}
gdjs.SettingsMenuCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.6), (runtimeScene) => (gdjs.SettingsMenuCode.asyncCallback12380276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SettingsMenuCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithShadow"), gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1[k] = gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1 */
{for(var i = 0, len = gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1.length ;i < len;++i) {
    gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1[i].getBehavior("Tween").addObjectPositionXTween2("ok1", -(424), "easeOutQuint", 1.5, false);
}
}
{ //Subevents
gdjs.SettingsMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.SettingsMenuCode.GDMusicSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsMenuCode.GDMusicSliderObjects1.length;i<l;++i) {
    if ( gdjs.SettingsMenuCode.GDMusicSliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsMenuCode.GDMusicSliderObjects1[k] = gdjs.SettingsMenuCode.GDMusicSliderObjects1[i];
        ++k;
    }
}
gdjs.SettingsMenuCode.GDMusicSliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SettingsMenuCode.GDMusicSliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("MusicVol").setNumber((( gdjs.SettingsMenuCode.GDMusicSliderObjects1.length === 0 ) ? 0 :gdjs.SettingsMenuCode.GDMusicSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("MusicVol").setNumber(100);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithShadow"), gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1);
gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.SettingsMenuCode.GDMusicSliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.SettingsMenuCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1.length ;i < len;++i) {
    gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1[i].getBehavior("Tween").addObjectPositionXTween2("Move", 0, "easeOutCirc", 1.5, false);
}
}{for(var i = 0, len = gdjs.SettingsMenuCode.GDMusicSliderObjects1.length ;i < len;++i) {
    gdjs.SettingsMenuCode.GDMusicSliderObjects1[i].getBehavior("Tween").addObjectPositionXTween2("Move", 0, "easeOutCirc", 1.5, false);
}
}{for(var i = 0, len = gdjs.SettingsMenuCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.SettingsMenuCode.GDNewTextObjects1[i].getBehavior("Tween").addObjectPositionXTween2("Move", 0, "easeOutCirc", 1.5, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithShadow"), gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1[k] = gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.SettingsMenuCode.GDMusicSliderObjects1);
{for(var i = 0, len = gdjs.SettingsMenuCode.GDMusicSliderObjects1.length ;i < len;++i) {
    gdjs.SettingsMenuCode.GDMusicSliderObjects1[i].getBehavior("Tween").addObjectPositionXTween2("ok1", -(424), "easeOutQuint", 1.5, false);
}
}
{ //Subevents
gdjs.SettingsMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithShadow"), gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1[k] = gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.SettingsMenuCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.SettingsMenuCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.SettingsMenuCode.GDNewTextObjects1[i].getBehavior("Tween").addObjectPositionXTween2("ok1", -(424), "easeOutQuint", 1.5, false);
}
}
{ //Subevents
gdjs.SettingsMenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithShadow"), gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1[k] = gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.SettingsMenuCode.GDMusicSliderObjects1);
{for(var i = 0, len = gdjs.SettingsMenuCode.GDMusicSliderObjects1.length ;i < len;++i) {
    gdjs.SettingsMenuCode.GDMusicSliderObjects1[i].getBehavior("Tween").addObjectPositionXTween2("ok1", -(424), "easeOutQuint", 1.5, false);
}
}
{ //Subevents
gdjs.SettingsMenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.SettingsMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsMenuCode.GDMusicSliderObjects1.length = 0;
gdjs.SettingsMenuCode.GDMusicSliderObjects2.length = 0;
gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects1.length = 0;
gdjs.SettingsMenuCode.GDGreenButtonWithShadowObjects2.length = 0;
gdjs.SettingsMenuCode.GDNewTextObjects1.length = 0;
gdjs.SettingsMenuCode.GDNewTextObjects2.length = 0;
gdjs.SettingsMenuCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.SettingsMenuCode.GDSquareWhiteSliderObjects2.length = 0;

gdjs.SettingsMenuCode.eventsList4(runtimeScene);

return;

}

gdjs['SettingsMenuCode'] = gdjs.SettingsMenuCode;
