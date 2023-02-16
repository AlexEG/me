(1)![Alt text](../IMAGES/HTML/MAIN%20-%20%5B%20Resources%20%5D%20YT-Video/Screenshot%202023-02-16%20at%2010-40-13%20Me%20-%20DAY%203.png)

(2)![Alt text](../IMAGES/HTML/MAIN%20-%20%5B%20Resources%20%5D%20YT-Video/MAIN%20-%20%5B%20Resources%20%5D%20YT-Video.gif)

(3)![Alt text](../IMAGES/HTML/MAIN%20-%20%5B%20Resources%20%5D%20YT-Video/Screenshot%202023-02-16%20at%2010-40-27%20Me%20-%20DAY%203.png)

(4)![Alt text](../IMAGES/HTML/MAIN%20-%20%5B%20Resources%20%5D%20YT-Video/Screenshot%202023-02-16%20at%2010-40-46%20Me%20-%20DAY%203.png)

(5)![Alt text](../IMAGES/HTML/MAIN%20-%20%5B%20Resources%20%5D%20YT-Video/Screenshot%202023-02-16%20at%2010-40-32%20Me%20-%20DAY%203.png)

(6)![Alt text](../IMAGES/HTML/MAIN%20-%20%5B%20Resources%20%5D%20YT-Video/Screenshot%202023-02-16%20at%2010-40-41%20Me%20-%20DAY%203.png)

```html
<!--*----- YT-Video [START]-----*-->
<!-- IMAGE[1] -->
<div class="yt-video-contanier">
  <!-- ↓↓ in [a] SRC= video URL -->
  <a
    class="yt-vid-link"
    href="https://www.youtube.com/watch?v=ppwagkhrZJs"
    target="_blank"
  >
    <!-- IMAGE[2] -->
    <!----↓ autoplay GIF on hover ↓---->
    <!-- ?? step[1] hover on video and wait till the GIF start to repet it self.
         ?? step[2] click Save image as...  -->
    <img
      class="thumbnail-gif"
      src="https://i.ytimg.com/an_webp/ppwagkhrZJs/mqdefault_6s.webp?du=3000&sqp=CMOZsp8G&rs=AOn4CLA_BGeaw36UHM1ULhWN-v6XXyrvYQ"
      alt=""
    />

    <!-- IMAGE[3] -->
    <!----↓ in [img] change SRC= to thumnail URL of the video ↓---->
    <!-- ?? step[1] go to your YouTube History.
         ?? step[2] open dev tool + inspect the video.
         ?? step[3] copy the <img> thumbnail URL.
         ?? step[4] change (https://i.ytimg.com/vi/k_zz3239DA0/[[hqdefault]].jpg?sqp=) to /hq720.jpg? - to have a hight resolution thumbnail -->
    <img
      class="video-thumbnail"
      src="https://i.ytimg.com/vi/sFsRylCQblw/hq720.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8xgeRFJtMXzDiJSPb40esigtifA"
      alt=""
    />
  </a>

  <div class="video-data">
    <div class="channel-logo">
      <!-- IMAGE[4] -->
      <!----↓ channel logo from assets/sections/youtube/youtube-channels-logo ↓---->
      <img
        src="../src/assets/sections/Resources/youtube-channels-logo/Fireship.jpg"
        alt=""
      />
    </div>
    <div class="title-channel-name">
      <!-- IMAGE[5] -->
      <!----↓ Video Title ↓---->
      <p class="title">7 Web Features You Didn’t Know Existed</p>
      <!-- IMAGE[6] -->
      <!----↓ Channel's Name ↓---->
      <p class="channel-name">Fireship</p>
    </div>
  </div>
</div>

<!--*----- YT-Video [END]-----*-->
```

<hr>

[GO BACK](../HTML%20COMMENTS.md)
