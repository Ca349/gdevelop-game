gdjs.LevelSelectCode = {};
gdjs.LevelSelectCode.GDL1Objects1= [];
gdjs.LevelSelectCode.GDL1Objects2= [];
gdjs.LevelSelectCode.GDNewTiledSpriteObjects1= [];
gdjs.LevelSelectCode.GDNewTiledSpriteObjects2= [];


gdjs.LevelSelectCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("L1"), gdjs.LevelSelectCode.GDL1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LevelSelectCode.GDL1Objects1.length;i<l;++i) {
    if ( gdjs.LevelSelectCode.GDL1Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LevelSelectCode.GDL1Objects1[k] = gdjs.LevelSelectCode.GDL1Objects1[i];
        ++k;
    }
}
gdjs.LevelSelectCode.GDL1Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelTest", false);
}}

}


};

gdjs.LevelSelectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelSelectCode.GDL1Objects1.length = 0;
gdjs.LevelSelectCode.GDL1Objects2.length = 0;
gdjs.LevelSelectCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.LevelSelectCode.GDNewTiledSpriteObjects2.length = 0;

gdjs.LevelSelectCode.eventsList0(runtimeScene);

return;

}

gdjs['LevelSelectCode'] = gdjs.LevelSelectCode;
