# ViBoot Enhanced

> **Enhance your VTOP experience in one-click.**

ViBoot Enhanced is an improved version of ViBoot available on the Chrome Web Store. It is designed to make VIT's VTOP easier and faster to use for students from the Vellore, Chennai, and Bhopal campuses. The extension helps by automating boring and repetitive tasks, giving helpful insights on attendance and marks.

## 🚀 Features

### 📊 **Smart Attendance Management**

- **75% Attendance Calculator:** Automatically calculates how many classes you can skip to maintain 75% attendance
- **Real-time Alerts:** Color-coded warnings for attendance status (Green: Safe, Yellow: Caution, Red: Danger)
- **Lab vs Theory Differentiation:** Separate calculations for lab and theory classes
- **On-Duty Tracking:** Comprehensive OD (On-Duty) summary with automatic counting and smart analysis
    - **Detailed OD Summary:** Complete chronological list of all OD entries with dates, times, and counts
    - **Course-Wise Analysis:** Separate OD breakdown by course with theory/lab differentiation
    - **Smart OD Counting:** Automatic calculation (theory slots = 1 OD, lab slots = 2 ODs)
    - **Total OD Counter:** Real-time total
      _(OD calculation feature sourced from the [ezOD](https://chromewebstore.google.com/detail/ezod/hcjjembkbilgkojhpapcffibhandgokh) extension by Parth Sidpara)_
- **Attendance Summary:** Overall attendance statistics with skip calculations for different percentage targets

### 📈 **Marks Analysis**

- **Passing Marks Calculator:** Shows exactly how many marks you need in FAT to pass each course
- **Weightage Analysis:** Displays total weightage, scored marks, and lost marks
- **Course-wise Breakdown:** Individual analysis for Theory, Lab, and STS courses
- **Visual Indicators:** Color-coded passing status (Green: Pass, Red: Need more marks)

### 📅 **Google Calendar Integration**

- **Time Table Sync:** Automatically sync your class schedule to Google Calendar
- **Exam Schedule Sync:** Sync exam dates and venues to your calendar

### 🎯 **Enhanced Navigation**

- **Quick Access Toolbar:** One-click access to Attendance, Marks, Course Page, and Time Table
- **Campus Support:** Works seamlessly across VIT Vellore, Chennai, and Bhopal
- **Auto-captcha Solving:** Automatically solves VTOPCC captcha challenges
- **Responsive Design:** Optimized for all screen sizes

## 🛠️ Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the extension folder
5. The extension will be installed and ready to use

### Key Features Usage

#### Attendance Management

- Navigate to "Class Attendance" in VTOP
- View enhanced attendance table with 75% calculations
- Click "Check OD" button to see comprehensive On-Duty summary with:
    - Complete chronological list of all OD entries
    - Total OD count with smart theory/lab calculations
    - Course-wise OD breakdown separating theory and lab components
- Click "Check Course-Wise OD" for consolidated view of ODs per subject
- Monitor your attendance status with color-coded indicators

#### Marks Analysis

- Visit "Marks View" in VTOP
- See enhanced marks table with passing requirements
- View weightage analysis and lost marks calculation
- Get clear indicators for each course's passing status

## 🏫 Supported Campuses

- **VIT Vellore** ([`vtop.vit.ac.in`](https://vtop.vit.ac.in))
- **VIT Chennai** ([`vtopcc.vit.ac.in`](https://vtopcc.vit.ac.in))
- **VIT Bhopal** ([`vtop.vitbhopal.ac.in`](https://vtop.vitbhopal.ac.in))

> ⚠️ _**Note:** Feature availability may vary across campuses due to differences in VTOP implementations._

## 🌐 Supported Browsers

![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)
![Brave](https://img.shields.io/badge/Brave-FB542B?style=for-the-badge&logo=Brave&logoColor=white)
![Microsoft Edge](https://img.shields.io/badge/Microsoft%20Edge-0078D7?style=for-the-badge&logo=Microsoft-edge&logoColor=white)
![Opera](https://img.shields.io/badge/Opera-FF1B2D?style=for-the-badge&logo=Opera&logoColor=white)

⚠️ _**Note:** Firefox and Safari are **not supported**, as they use different extension systems._

## 🐛 Troubleshooting

### Common Issues

**Extension not working:**

- Refresh the VTOP page
- Check if you're on a supported campus URL
- Ensure the extension is enabled in Chrome

**Google Calendar sync not working:**

- Ensure you're signed in to Google via the extension popup
- Check your Google Calendar permissions in Chrome settings
- Verify your internet connection
- Try signing out and signing in again
- Refresh the VTOP page and try syncing again

**Attendance calculations incorrect:**

- Refresh the attendance page
- Check if you're viewing the correct semester
- Ensure all attendance data is loaded

### Development Setup

1. Clone the repository
2. Load the extension in Chrome developer mode
3. Make your changes
4. Test thoroughly across all supported campuses
5. Submit a pull request

## 👥 Credits

| **Role**                      | **Name**                                                                         | **Course & Year** |
| ----------------------------- | -------------------------------------------------------------------------------- | ----------------- |
| **ViBoot Author**             | [Manjunadha Abhinai](https://www.linkedin.com/in/manjunadha-abhinai/) [ViTrendz] | CSE @ VITV'25     |
| **ezOD Author (OD Analysis)** | [Parth Sidpara](https://www.linkedin.com/in/parthsidpara/)                       | CSE @ VITC'27     |
| **Enhanced by**               | [Arsh Saxena](https://www.github.com/arshsaxena)                                 | ECE @ VITC'27     |
|                               | [Aishik Tokdar](https://www.github.com/AishikTokdar)                             | ECE @ VITC'27     |

_Original credits belong to the respective authors only._

## 🔗 Links

- [ViBoot on Chrome Web Store](https://chromewebstore.google.com/detail/viboot/mhbflefepokengbccinkmfhokjkphbol)
- [ezOD on Chrome Web Store](https://chromewebstore.google.com/detail/ezod/hcjjembkbilgkojhpapcffibhandgokh)
- [ViBoot Enhanced GitHub Repository](https://github.com/arshsaxena/ViBoot-Enhanced)
- [Arsh Saxena](https://www.arshsaxena.in) ([LinkedIn](https://www.linkedin.com/in/arshsaxena), [GitHub](https://www.github.com/arshsaxena))
- Aishik Tokdar ([LinkedIn](https://www.linkedin.com/in/aishiktokdar), [GitHub](https://www.github.com/AishikTokdar))
