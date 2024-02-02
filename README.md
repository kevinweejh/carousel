# Carousel

This project is a practice into creating dynamic UI.


## Project Overview

### Purpose

This carousel will house and display images. It provides functionality for users to scroll through the images by way of arrows on the left and to the right. The circle indicators at the bottom of the image (1) tell users which image they are currently viewing, and (2) provide a means to quickly navigate to another image. Finally, if no user input is detected after 5 seconds, the carousel will advance to the next image automatically. 

### Key Features

- Scroll to the previous/next image.
- View current image position.
- Quickly navigate to any other image.
- Automatically scroll through images.

## Technical Details

### Optimizations

- Image compression is done in production using `ImageMinimizerWebpackPlugin`.
- CSS file extraction and minification in production, using `MiniCssExtractPlugin` and `CssMinimizerPlugin`.
- Built-in JavaScript minification with `TerserWebpackPlugin`, default with Webpack 5+ out of the box when `mode: 'production'` is set. Note: No additional setup is required for basic usage.

### Tailwind CSS Integration

- Follows standard installation and setup procedures as per the [Tailwind CSS documentation](https://tailwindcss.com/docs/installation/using-postcss).
- Tailwind classes can be added statically in HTML or dynamically in JavaScript files. They are scanned using Regex as specified in the Tailwind configuration.
- The `./style.css` file, containing Tailwind directives, should be imported only once in the entry point JavaScript file. Do not link this stylesheet directly in the HTML template or other modules.
- Caution: Avoid including any CSS output files in the `/src` directory targeted by the Tailwind `content` configuration to prevent an infinite rebuilding loop.

### GitHub Actions Deployment

- GitHub Actions is used by way of the `deploy.yml` file nested in the `.github/workflows` directory. 
- Deploying in this manner allows the generated contents of the `/dist` directory to be kept out of the repo, which has the following benefits:
  - Reduce repo size
  - Avoid merge conflicts of the generated files

## Setup and Installation

### Prerequisites

Node.js v21.1.0

### Installation

```bash
npm install
```

### Running the Project

#### For development:

```bash
npm start
```

#### For production:

```bash
npm run build
```

## Usage and Examples

![Clickthrough of site UI]()

## Contribution and Support

### Contributing

While this project is primarily a personal learning exercise, I welcome anyone interested in using it for their learning or experimenting. Feel free to fork the repository, try out different configurations, and share your findings. If you have suggestions for improvements or new features, please open an issue or submit a pull request.

### Support

For questions regarding the setup and configuration of this project, feel free to reach out to me at [kevinweejh@gmail.com](mailto:kevinweejh@gmail.com) or [hello@codebykevin.dev](mailto:hello@codebykevin.dev). I'll be more than happy to provide guidance or discuss the learning aspects of this project.

## Acknowledgements and References

This utilizes resources from [Tailwind CSS](https://tailwindcss.com/docs/installation) and [Webpack](https://webpack.js.org/guides/) documentation, [GitHub Pages Deploy Action](https://github.com/JamesIves/github-pages-deploy-action) for deployment, along with third-party plugins like [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/), [css-minimizer-webpack-plugin](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/), and [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/).