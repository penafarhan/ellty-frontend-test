# ELLTY FE Test

This is a simple React application that demonstrates a popup card with checkboxes for selecting pages. The design is inspired by a Figma design, and the implementation focuses on accuracy and adherence to the provided specifications.

Please check the _!!NOTE_ comments in the code for explanations of certain design choices and deviations from the Figma design.

The height is different from the Figma design due to the addition of a border and automatic spacing in the page list.

In figma it has 326px height but in the implementation it is 332px height.
There are 5 checkboxes with each 42px height (including gap), so total 210px height.
Then 2 dividers with each 20px height, so total 40px height.
And button with 60px height.
Popup card pading top and bottom is 10px + 10px = 20px.
And last, popup has border, top and bottom 1px + 1px = 2px.
So total height is 210 + 40 + 60 + 20 + 2 = 332px
