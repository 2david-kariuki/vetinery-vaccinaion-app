# Vetinery Vaccination App

## Overview

The **Vetinery Vaccination App** is a simple web application designed to manage vaccination records for animals. It allows users to add, edit, and delete vaccination records, making it easier to keep track of important vaccination dates.

## Features

- **Add Vaccination Records**: Input animal name, vaccine type, and vaccination date.
- **Edit Records**: Update existing vaccination details.
- **Delete Records**: Remove outdated or incorrect records.
- **View Records**: Display a list of all vaccination records.

## Technologies Used

- **HTML**: Structure of the application.
- **CSS**: Styling for a user-friendly interface.
- **JavaScript**: Logic for managing vaccination records.
- **JSON Server**: Mock backend for storing vaccination data.

## Getting Started

### Prerequisites

- Install [Node.js](https://nodejs.org/) (includes npm).
- Install JSON Server globally by running:
    ```bash
    npm install -g json-server
    ```

### Setup

1. Clone the repository:
     ```bash
     git clone https://github.com/your-username/vetinery-vaccination-app.git
     ```
2. Navigate to the project directory:
     ```bash
     cd vetinery-vaccination-app
     ```
3. Start the JSON Server:
     ```bash
     json-server --watch db.json --port 3000
     ```
4. Open `index.html` in your browser to use the app.

## File Structure

- `index.html`: Main HTML file for the app.
- `styles.css`: Contains the app's styling.
- `index.js`: JavaScript file for app functionality.
- `db.json`: Mock database for storing vaccination records.

## How to Use

1. **Add a Record**:
     - Fill in the animal name, vaccine type, and vaccination date in the form.
     - Click the "Add Record" button to save the record.

2. **Edit a Record**:
     - Click the "Edit" button next to a record.
     - Update the details in the form and click "Save".

3. **Delete a Record**:
     - Click the "Delete" button next to a record to remove it.

## Example Data

Here is an example of the data stored in `db.json`:
```json
{
    "vaccinations": [
        {
            "id": "1",
            "animalName": "Dog",
            "vaccine": "Rabies",
            "date": "2025-03-13"
        },
        {
            "id": "2",
            "animalName": "Cat",
            "vaccine": "FIV",
            "date": "2025-03-20"
        }
    ]
}
```

## Future Improvements

- Add user authentication for secure access.
- Implement search and filter functionality.
- Enhance UI/UX with additional styling.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Thanks to the creators of JSON Server for providing a simple mock backend solution.
- Inspired by the need for better animal vaccination tracking.

