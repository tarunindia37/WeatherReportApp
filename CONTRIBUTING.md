# Coding Standards

### Code structure
* `app` - The react client side app
    * `components` - Stateful identified components used across Open Young app. e.g. header, footer, home.
    * `gcomponents` - Components re-used across all pages. e.g. buttons, drop box.
    * `config` - Stores configuration like routes.
    * `screens - Holds wrapper per screen.
    * `utils` - Generic functions that are shared.
    * `i18n.js` - Loads the language messages to be used in the react app.
    * `reducers.js` - Holds all the reducers of the app.
    * `store.js` - Store for the React app.
* `assets` - Used to store shared assets like images, fonts.
* `android` - Native code of Android. Do not touch unless you know what you are doing.
* `ios` - Native code of iOS. Do not touch unless you know what you are doing.
* `App.js` - App's main file.
* `app.json` - Defins config of the mobile app.
* `gulfile.js` - All the gulp commands defined here.
* `index.js` - Entry point of the app boot.
* `.editorconfig` - Text/Code editor standards.
* `.eslintrc` - Holds javascript coding standards for react native files.
* `.babelrc` - Holds config for babel transpiler.

### Coding standards

* Always use space in currly braces like ```import { someComponent } from 'somepackage';```
* You can use as many as `export` statement in between of component code. `But export default` has to be last line.
* Always use Text, View or any UI element from native base. Do not use react natives unless necessary.
* Try not to write huge inline functions in templates, always define funcition & use it here.
  ```
  // Bad example.
  <Button onPress={() => { veryLargeCodeHere }}
  ```
* Inline comments should always be written on previous line of code.

### Redux State or Component state?
Always always use redux state. Only cases were component has its own internal state use component state.

### Including new library/package
Always discuss with the team/leads when you want to include new library or package in the code. This is to avoid unnecessary inclusions of use packages as it may lead to slow application or huge load times.


# Internationlization
Do not hard code any words direcly in the template code. Always internationlize by following below steps.
1. Go to assets/locales/en.json file, add key with it's message.
2. Import file `app/i18n/js` as `I18n` in your component.
3. Use ```<Text>{I18n.text('yourkey')}</Text>```.
4. It will output message which you have stored against your key.

Always add translation keys for both English and Spanish. Always use - in keys to differentiate. The format for key naming ideally should be `yourpage-context` or `yourpage-yourmodule-context` or `yourmodule-context`. Common keys used in many modules or pages should be named like `shared-context`. Below are few examples of naming keys for more understanding.
* ```interests-title```  - where interests is page and title is context where it is used.
* ```payment-creditcard-description``` - where payment is page, creditcard is module & description is context.
* ```education-question```- Where education is module, & question is context.
* ```shared-button-next``` - where shared means key shared on many pages/modules, button explains where it is used & next means whats the context.

Overall what it means is keys should be meaningful and should give idea of roughly the purpose or use of key.


# Development branching techniques
### Working on a feature
1. Checkout develop branch latest ```git checkout develop && git pull```
2. Fork a feature branch ```git checkout -b feature/feature-name```
3. Work on the feature, test it. When it is done commit the code.
4. Raise a new [pull request](https://github.corp.globant.com/umakant-patil/react-native-seed/pulls) and Asssign ticket to QA.
5. Once QA has closed the ticket, Team lead will approve if its good code, they will merge it in develop branch.
6. If you have a review on pull request, correct the code in the same branch again and review the code, after that step 5 will be done.

### Working on a bug
1. All the above steps are same a feature.
2. Except note that bug branch name has to be 'bug/issue-ticket-id'.

### Release
1. Take a latest pull of develop branch ```git checkout develop && git pull```.
2. Fork a release branch ```git checkout release/release-no```.
3. Release number should be 0.0.1 or 2.1.0 in this format.
4. Push the release branch on production.
5. After release is successful, merge release branch in master ```git checkout master && git pull && git merge release/release-no && git push```
6. Tag master with release tag number ```git tag -a release-no -m "message here"```
7. Merge master branch to develop again (Just in case any new changes were directly done to release branch. Note it's a bad practice.) ```git checkout develop && git pull && git merge master```.

### Notes
1. Never directly write code in master or develop branch
2. Always fork a feature or bug branch and do the work and raise a pull request for review/QA.
3. Production release shall be done by the lead.
4. If you have any questions with the development branching technique, ask Umakant or Pragati.
