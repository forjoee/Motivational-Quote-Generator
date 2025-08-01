# 💬 Motivational Quote Generator

A simple and fun **Motivational Quote Generator** that gives you fresh inspiring quotes every time you click. Built with plain **HTML, CSS, and JavaScript**, it’s easy to use and looks great.

## 🚀 Features

- 🎨 A nice-looking design with smooth gradients and subtle hover effects.  
- 🔁 Just click anywhere on the quote box and get a brand new motivational quote instantly.  
- 🌐 Uses a free, public API to fetch quotes — no backend or complicated setup needed.  
- ⚡ Super lightweight and fast since it’s all done with vanilla front-end code.

## ⚠️ Important Note on Browser Compatibility

This website fetches quotes from an external API with HTTPS. Some browsers (like Chrome) may block the requests if the API’s SSL certificate is invalid or expired, resulting in errors like `net::ERR_CERT_DATE_INVALID`.  
- This is a security feature in browsers to protect users.
- In such cases, you might see errors or the website won’t load new quotes unless the certificate issue is fixed by the API provider.
- Firefox or other browsers may be less strict and still allow requests.

### 💡 How To Fix It
1. **Let your browser trust the API:**
   - When the quote box doesn’t load new quotes, it's likely due to a blocked connection.
   - In Chrome, click on the address bar and type or paste:
     ```
     https://api.quotable.io
     ```
   - Press Enter. You’ll likely see a warning screen.
   - Click **“Advanced”**, then **“Proceed to api.quotable.io (unsafe)”**.
   - Once the page tries to load, go **back to the quote website** and **refresh** — it should now work!

2. **Try using Firefox, Brave, or another browser:**  
   Some browsers are more lenient and might allow the quotes to load even if Chrome blocks them.

3. **Check back later:**  
   The API’s expired certificate causes this issue. It’s temporary and usually gets fixed by the provider soon.

Once the SSL certificate is valid again, everything will work fine on your browser.

## 🛠️ Technologies Used

- **HTML** for the page structure  
- **CSS** for styling and animations  
- **JavaScript** for fetching quotes and updating the page dynamically

## 📷 Preview

![Quote Generator Preview](preview.png)

## 📖 How to Use

Just click the box, and a new motivational quote will appear!

## 🌎 Try It Out!

Check it out live here:
🔗 **[Website](https://forjoee.github.io/Motivational-Quote-Generator/)**
