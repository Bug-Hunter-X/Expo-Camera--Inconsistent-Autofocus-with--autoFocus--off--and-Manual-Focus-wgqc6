This bug occurs when using the Expo Camera API with custom camera configurations.  Specifically, when setting `autoFocus` to `'off'` and trying to manually focus using `Camera.setCameraParamsAsync`, the focus may not work as expected. The camera might remain unfocused or focus on an unexpected point, despite the parameters seemingly being set correctly.  This is inconsistent and only happens sporadically.