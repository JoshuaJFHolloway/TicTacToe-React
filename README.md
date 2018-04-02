# TicTacToe-React

This simple application is Tic Tac Toe. The legendary game that has created wars and ended relationships.
This is a novel take on it, a ReactJS adaptation. 


## How to use

1. Clone the repo
2. Run npm install
3. Run npm start
4. If the server hasn't been opened in your browser, type in localhost:3000
5. Enjoy


## How to run tests

Simply run 'npm t' in your terminal


## Requirements

MVP:

- Two user game sharing one mouse
- Users can select where to place their O or X on a grid
- Single page application
- Once a user has 3 X's or O's in a row they win


## My approach

I started out by drawing out how I want the application to look on a piece of paper. This
allowed me to start working out how many components I'll need and what components they'll
be children of. Afterwards, I thought about how they would interact with each other to 
achieve the functionality of the aforementioned requirements. I decided that what would be easiest
for me would be to create a grid of 9 buttons that would, once clicked (onClick functions), disappear
to render another component in its place that would be a picture of a X or O. What would dictate 
whether its a X or O would be the state of the parent component that the button components would sit
within. The state would be passed down to the the children (buttons). So, if the parent component 
state was X then once the button is clicked it would disappear to show a picture of an X. 

I thought that this would also avoid the possibility of someone trying to click a button that has already
been clicked. The state of each button can only be changed once as it disappears afterwards. With each
onClick function the state of the parent component would change. I will have a function that will
check each time. The game will start with an X and this function will change it to a O if its an X
and change it to a X if its a O.

As always I will endeavour to keep components strictly adhering to the SRP and extract logic wherever
possible. This is always easier with ReactJs's component structured nature, and a big reason why I like
it so much. Anyway, after drawing out the page I decided on a provisional 13 components. I am sure that
I'll need more when extracting logic for the winning conditions etc. But for the time this is what I will
be doing.

App
Wrapper (child of app)
Header (child of wrapper)
Grid container (child of wrapper)
x 9 button components (child of grid container)


## Authors

Joshua Holloway