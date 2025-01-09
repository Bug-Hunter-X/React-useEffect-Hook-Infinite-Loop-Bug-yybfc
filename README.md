# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: an infinite loop caused by a missing dependency in the dependency array.  The `useEffect` hook is intended to perform side effects, but when its dependencies aren't correctly specified, it can lead to unexpected and often infinite re-renders.

## Problem

The provided `bug.js` file contains a `MyComponent` component. The `useEffect` hook inside this component logs the current count and has a cleanup function. However, this effect runs on every render because the dependency array is empty ([]). This is because the `count` variable, which is being used and modified inside the effect, is not included as a dependency.  This creates an infinite loop of re-renders.

## Solution

The `bugSolution.js` file provides a corrected version.  The key change is adding `count` to the dependency array of the `useEffect` hook. This ensures the effect only runs when the `count` value changes.