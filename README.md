*project name: 
  NFT FILTER PROJECT for Sweetgum Lab
*what it does: 
  let user use time and price to filter and sort their desire NFTs from all NFT objects.
*how to use: 
  1.download the folder from github repo, open the folder with vscode, open terminal and enter "npm start"
  2.Inside the app, user can either start with filtering price or time, both filters will effect the result
    - price filter: enter the desired price range min & max, then click the button, 
      the result on the right will display the NFTs that passed the time filter and price filter.
    - time filter: double click the time option, 
      the result on the right will display the NFTs that passed the time filter and price filter.
  3. After filtering NFT's, use the "sort by price" and "sort by time" button to reorder the result.
    - sort by time: order the results from earliest to latest.
    - sort by price: order the results from lowest price to highest price. 
*used-tools: react.js, javascript, css, html
*bugs:
  1. will display nothing when user click filter price with empty input
  2. sometimes the buttons have to be double-clicked to be effective
  3. "sort by time" method can only be used once in every filter result if it was clicked before "sort by price". 
     If user clicks "sort by price" first, then "sort by time" will have no effect
*credit: developed by Misho Lee
