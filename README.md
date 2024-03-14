**Quote Generator**

This repository contains a simple web application that generates random quotes and allows users to tweet them. Below, you'll find a breakdown of the components and functionalities of this project.

### Components:

1. **HTML**: The structure of the web page is defined using HTML. It includes elements for displaying the generated quote, buttons for generating a new quote and tweeting the current one, and a loader for indicating when quotes are being fetched.

2. **CSS**: The styling of the web page is defined using an external CSS file (`style.css`), which provides aesthetic enhancements and layout adjustments.

3. **JavaScript**: The functionality of the web application is implemented using JavaScript. It fetches quotes from an external API, handles the generation of random quotes, updates the UI accordingly, and enables users to tweet the current quote.

### How to Use:

1. **Generating Quotes**: When the page loads, it fetches quotes from an external API asynchronously. Clicking the "New Quote" button generates a new random quote, which is displayed along with the author's name. If the quote is longer than 120 characters, it will be styled differently to ensure proper display.

2. **Tweeting Quotes**: Clicking the "Tweet This!" button opens a new window with a Twitter intent, pre-populated with the current quote and author's name. Users can customize the tweet before posting it.

### API Used:

This project utilizes the "quotes-api" hosted on GitHub Pages, accessible via the following URL: [https://jacintodesign.github.io/quotes-api/data/quotes.json](https://jacintodesign.github.io/quotes-api/data/quotes.json). The API provides a collection of quotes in JSON format.

### External Dependencies:

- **Font Awesome**: The project utilizes Font Awesome for icons. The library is included via a CDN link in the HTML file.
- **Fetch API**: The Fetch API is used for making asynchronous requests to fetch quotes from the external API.

### How to Run:

To run this project locally, simply clone this repository to your local machine and open the `index.html` file in a web browser. Ensure an active internet connection to fetch quotes from the API.

### Credits:

This project was developed by [Jacinto Design](https://github.com/jacintodesign). The code is open-source and available for anyone to use or modify under the MIT License.

### License:

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

### Feedback and Contributions:

Feedback and contributions are welcome! If you have suggestions for improvements or would like to contribute to this project, please feel free to open an issue or create a pull request on GitHub.

Thank you for checking out this Quote Generator project! We hope you enjoy using it. If you have any questions, don't hesitate to reach out.

---
