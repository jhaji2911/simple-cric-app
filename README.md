# Cricket Score Tracker 🏏📊

Welcome to the **Cricket Score Tracker** app, your go-to place for checking cricket scores of your favorite batsmen against different countries! 

## 🚀 How It Works

This app is built using **React Native** with **Expo**, **TypeScript**, and **React Native Paper** to ensure a smooth and beautiful user experience. Here's a quick breakdown of how the app operates:

1. **Dynamic Data Fetching**: 
   - Users can choose between **Test Data** (a predefined dataset) and **Server Data** (fetched from a live API).
   - When the **Server Data** option is selected, the app fetches cricket scores from [this API](https://assessments.reliscore.com/api/cric-scores/). 📡

2. **Country & Average Score Input**:
   - Users can type the name of a country, and the app will display the average score of the batsman against that country. If the country is not found, a dash `-` will appear in place of the score. 

3. **Visual Representation**:
   - A blue bar is displayed, which is proportional to the average score. The app automatically updates the display as the user types. 🎨

4. **Responsive Design**:
   - The app adapts beautifully to different screen sizes, ensuring a great experience whether you're on a phone or a tablet. 📱💻

5. **Atomic Structure**:
   - The app follows an **atomic design structure**, which breaks down the UI into smaller, reusable components:
     - **Atoms**: Basic components like AppBar, AppInput, and AppLabel.
     - **Molecules**: Groups of atoms that form functional elements (like the `CountryScoreRow` that shows the country name, average score, and bar).
     - **Organisms**: More complex components that can contain multiple molecules and atoms, managing their state and behavior.
     - **Templates** and **Pages**: Structure the layout of your app while remaining flexible to different content (we can extend the functionality lets say we have more screens).

## ⚙️ Getting Started

To run the app:

1. Clone the repository to your local machine.
2. Navigate into the project directory.
3. Install the dependencies using **Yarn**:
   ```bash
   yarn install
   ```
4. Start the development server:
   ```bash
   yarn start
   ```

## ✔️ App Requirements

This app **fully meets** the requirements outlined in the project specifications:
- Built with **TypeScript** for type safety and better developer experience.
- Utilizes **React Native Paper** for beautiful UI components and a consistent look.
- Made the App future proof by adding React Navigation and other libraries.
- Dynamic data binding 🎉
- Responsive design for different screen sizes 📏
- Real-time updates as users type 🖊️
- Ability to switch between test and server data with a sleek switch toggle 🔄
- Further enhancements (React Query, MMKV Storage, Zustand for state management) can be used to make the app more robust.
