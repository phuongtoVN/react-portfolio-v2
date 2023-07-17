# React Portfolio

This is a single-page application portfolio for a web developer, designed to showcase their work samples and skills. The portfolio is built using React and follows the given user stories and acceptance criteria.

## User Story

As an employer looking for candidates with experience building single-page applications, I want to view a potential employee's deployed React portfolio of work samples, so that I can assess whether they're a good candidate for an open position.

## Acceptance Criteria

- The portfolio presents a header, a section for content, and a footer.
- The header contains the developer's name and navigation with titles corresponding to different sections of the portfolio.
- The navigation titles include About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted.
- Clicking on a navigation title presents the corresponding section below the navigation without the page reloading, and the title is highlighted.
- When loading the portfolio for the first time, the About Me title and section are selected by default.
- The About Me section displays a recent photo or avatar of the developer and a short bio about them.
- The Portfolio section displays titled images of six of the developer's applications with links to both the deployed applications and the corresponding GitHub repository.
- The Contact section includes a contact form with fields for a name, an email address, and a message.
- Leaving a form field without entering text displays a notification that this field is required.
- Entering text into the email address field displays a notification if an invalid email address is provided.
- The Resume section includes a link to a downloadable resume and a list of the developer's proficiencies.
- The footer contains text or icon links to the developer's GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter).

## Getting Started

To run the portfolio locally, you need to have Node.js and npm (Node Package Manager) installed on your machine. You can clone this repository and follow the installation and usage instructions below.

## Components

The portfolio is structured using the following components:

- `Header`: A single component that appears on multiple pages and contains the developer's name and navigation links.
- `Navigation`: A component within the header used to conditionally render the different sections of the portfolio.
- `Project`: A single component used multiple times in the Portfolio section to display titled images of the developer's applications.
- `Footer`: A single component that appears on multiple pages and contains text or icon links to the developer's social profiles.



## Installation

1. Clone this repository to your local machine using:

```bash
git clone https://github.com/your-username/react-portfolio.git
```
2. Change to the project directory:
```bash
cd react-portfolio
```
3. Install the required dependencies:
```bash
npm install
```

## Usage 
o run the portfolio locally, use the following command:

```bash
npm start
```
This will start the development server, and the portfolio will be accessible at http://localhost:3000 in your web browser.

## Technologies
React
Create React App
Material-UI
## Author
The portfolio is developed by Phuong.

## License
This project is licensed under the MIT License.