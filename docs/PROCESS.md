
1. For this project, I implemented a menu search and category filter feature in my Vite + React restaurant website. Users can type a keyword to filter menu items by name or description, and they can also select categories such as Appetizers, Main Courses, or Desserts. The search and category filters work together, and a clear button resets the filters. I also added basic CSS styling to improve the user interface.

2. Using this “micro-iteration” approach feels very detail-oriented, because you can make small, precise changes at each step. The process is a bit tedious, though, since you have to keep changing, testing, and troubleshooting as you go.

3. Self-review was particularly useful. In one step, Claude suggested importing `./MenuFilter.css`, but I had not yet created that file. Vite immediately threw an import resolution error. After reviewing the error message, I manually removed the unused CSS import until I properly created the file. In another step, Claude pointed out accessibility improvements, such as adding a `<label>` for the search input and using `aria-pressed` for category buttons. I implemented these changes to improve usability.


4. I used Claude AI for this project, but I still needed to adjust the CSS styling on my own. Overall, my impression was mixed. The earlier steps worked well, but the CSS implementation in the final stages was not very effective. I had to manually revise the food item styles because Claude didn’t properly update their CSS. However, without Claude AI, it would have been very difficult for me to complete all of this.


5. Through a self review of the MenuFilter component, we identified several areas for improvement, particularly in handling edge cases, error management, and overall code structure. Implementing these improvements will help enhance the code’s quality and maintainability.

6.The advantage of Claude Code CLI is that it can directly read and interact with your project files. For example, it can automatically modify my MenuFilter.jsx file or create new files for me. In contrast, the web version provides a more conversational experience, where I can ask questions more freely, receive more detailed explanations, and use it as a learning tool.

7. Micro-iteration + self-review is especially useful for features that involve state. When state increases, the logic becomes more complex, the number of conditions grows, and the risk of bugs increases. It also becomes easier to overlook edge cases. Working in small steps helps manage that complexity and catch problems early.
