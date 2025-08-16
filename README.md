# YouTube Speed Setter

A Chrome extension that automatically sets YouTube video playback speed to your preferred rate.

## Features

- 🎯 Automatically applies your preferred speed to all YouTube videos
- ⚡ Persistent speed settings across browser sessions  
- 🎛️ Easy-to-use popup interface with speed presets
- 🔄 Real-time speed updates without page refresh
- 📺 Shows current video information when active

## Installation

### From Chrome Web Store (Coming Soon)
*Extension will be available on the Chrome Web Store*

### Manual Installation (Developer Mode)

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension folder
5. The YouTube Speed Setter icon should appear in your extensions toolbar

## Usage

1. **Set Your Preferred Speed**: Click the extension icon and select your desired playback speed from the dropdown
2. **Automatic Application**: Your chosen speed will automatically apply to all YouTube videos
3. **Persistent Settings**: Your speed preference is saved and will persist across browser sessions

### Available Speed Options
- 0.25x (Quarter Speed)
- 0.5x (Half Speed)  
- 0.75x (Slow)
- 1x (Normal)
- 1.25x (Slightly Fast)
- 1.5x (Fast)
- 1.75x (Faster) - *Default*
- 2x (Double Speed)

## Files Structure

```
youtube-speed-setter/
├── manifest.json          # Extension configuration
├── content.js             # Main logic for speed control
├── popup.html             # Extension popup interface
├── popup.js              # Popup functionality
├── README.md             # This file
└── LICENSE               # MIT License
```

## How It Works

The extension uses Chrome's content script API to:

1. **Monitor YouTube Pages**: Detects when you're on YouTube and finds video elements
2. **Apply Speed Settings**: Automatically sets the playback rate based on your saved preference
3. **Handle Dynamic Content**: Uses MutationObserver to work with YouTube's dynamic page loading
4. **Maintain Speed**: Prevents YouTube from overriding your preferred speed setting

## Permissions

- `activeTab`: Required to interact with YouTube pages
- `storage`: Used to save your speed preferences

## Development

### Prerequisites
- Chrome browser
- Basic knowledge of JavaScript and Chrome Extensions

### Local Development
1. Clone the repository
2. Make your changes
3. Load the extension in developer mode
4. Test on YouTube videos

### Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Technical Details

- **Manifest Version**: 3 (latest Chrome extension standard)
- **Target Sites**: `*://*.youtube.com/*`
- **Storage**: Chrome's local storage API
- **DOM Manipulation**: Native JavaScript with MutationObserver

## Troubleshooting

**Extension not working?**
- Refresh the YouTube page after installation
- Check that the extension is enabled in `chrome://extensions/`
- Ensure you're on a YouTube video page (not homepage or search)

**Speed keeps reverting?**
- The extension automatically maintains your preferred speed
- If issues persist, try reloading the extension

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

### Version 1.0
- Initial release
- Basic speed control functionality
- Popup interface with speed presets
- Persistent settings storage

## Support

If you encounter any issues or have suggestions:
1. Check the [Issues](../../issues) section
2. Create a new issue with detailed information
3. Include your Chrome version and steps to reproduce

---

**Made with ❤️ for YouTube power users who want control over their viewing experience**
