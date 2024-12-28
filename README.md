# Expo Camera Autofocus Bug

This repository demonstrates an uncommon bug encountered when using the Expo Camera API with custom camera configurations. The issue involves inconsistent autofocus behavior when setting `autoFocus` to `'off'` and attempting manual focus using `Camera.setCameraParamsAsync`.

## Bug Description

The camera sometimes fails to focus correctly or focuses on an unexpected area, even though the focus parameters appear to be set correctly. This behavior is inconsistent and occurs sporadically, making debugging difficult.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install` to install the necessary dependencies.
3. Run the app on a physical device or emulator.
4. Observe the inconsistent focus behavior when trying to manually focus the camera.

## Solution

A potential workaround (included in the `bugSolution.js` file) involves adding a small delay using `setTimeout` before setting the camera parameters. This delay might allow the camera enough time to properly initialize and respond to the focus commands, making the focus more consistent.