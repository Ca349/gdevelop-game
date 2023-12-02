gdjs.DMOCompleteCode = {};
gdjs.DMOCompleteCode.GDNewTextObjects1= [];
gdjs.DMOCompleteCode.GDNewTextObjects2= [];


gdjs.DMOCompleteCode.asyncCallback9780260 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}
gdjs.DMOCompleteCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.DMOCompleteCode.asyncCallback9780260(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.DMOCompleteCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Super Mario 64 - Thank you so much a-for-to playing my game.mp3", false, 100, 1);
}
{ //Subevents
gdjs.DMOCompleteCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.DMOCompleteCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DMOCompleteCode.GDNewTextObjects1.length = 0;
gdjs.DMOCompleteCode.GDNewTextObjects2.length = 0;

gdjs.DMOCompleteCode.eventsList1(runtimeScene);

return;

}

gdjs['DMOCompleteCode'] = gdjs.DMOCompleteCode;
