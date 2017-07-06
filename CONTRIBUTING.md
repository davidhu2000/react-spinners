# Contributing

Want to contribute? Awesome. We love contributors.

## How to Contribute

Fork then clone the repo:

    git clone git@github.com:your-username/react-spinners.git

Create a new branch:

    git checkout -b awesome-feature

Install the necessary dependencies (you can use `npm` or `yarn`):

    npm install

After finishing your feature, to update the `dist` folder, you can run:

    npm prepublish

If you want to make changes to the demo page, you can edit the files in `examples` and `docs` folder.
To see the changes, you can use `webpack` to update the bundle file.

    webpack --watch

Make or add changes, commit your changes:

    git add -A;
    git commit -m 'Awesome new feature';

Make sure to run the necessary tests and lints and fix any errors:

    npm run lint;

Push up to Github:

    git push origin awesome-feature;

[Create a Pull Request][pr], add appropriate label(s).

[pr]: https://www.github.com/davidhu2000/react-spinners/compare/

_Congratulations!_ You are done. Just wait for us to review your code.

## Issues or Feature Requests

Please click [here](https://github.com/davidhu2000/react-spinners/issues/new) to report an issue or request a new feature.
