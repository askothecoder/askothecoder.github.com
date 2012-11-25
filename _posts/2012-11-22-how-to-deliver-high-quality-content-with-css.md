---
layout: post
thumbnail: /images/thumbnails/how-to-deliver-high-quality-content-with-css.jpg
published: true
title: How to deliver high quality content with CSS?
date: 2012-11-22
---

Yesterday I made a joke on Twitter to [@smashingmag](https://twitter.com/smashingmag) saying "[I suppose `(min-connection-speed: 2mb)` in CSS would be nice](https://twitter.com/askothecoder/status/271367427089125376)". Then [@smashingmag](https://twitter.com/smashingmag) tweeted "[Agree?](https://twitter.com/smashingmag/status/271368026937511939)" and a ton of opinions followed. Some agreed, most disagreed. Apparently it's very unreliable, like mentioned by [@respimg](https://twitter.com/respimg) and therefore will probably never be implemented by any browser. 

Today [@smashingmag](https://twitter.com/smashingmag) tweeted "[We'd love to have this article on SmashingMag as well](https://twitter.com/smashingmag/status/271595279315243008)". It was then when I realized that my joke was not really a joke after all. Something I did not even think about - a real issue with delivering content to slow and fast connections differently. 

We, front-end developers, have to optimize our images to fit a very tiny size so it would play well with third-world countries where the connection speed has not developed much, but that risks a loss of quality of the images and let's be honest, we all would love fast loading, high quality images.

So, a media query that I joked about obviously does not exist. But what does? I started thinking and realized page load times are probably the safest way to go, I'll be using PHP and `microtime()` (which, I'm pretty sure, can be done in a ton of other languages, too) for the example.

<pre class="highlight">
$time = microtime();
$time = explode(' ', $time);
$time = $time[1] + $time[0];
$finish = $time;
$total_time = round(($finish - $start), 4);
$too_long = 1;

if($total_time > $too_long){
	// load stylesheet for a slow connection
}else{
	// load stylesheet for a fast connection
}
</pre>

That would, by theory, enable us detect how long did it took for a visitor to load the page and judging by that time, load a stylesheet with either high quality or low quality images. And it's not THAT ugly. 

However, I'm really interested in various solutions regarding the subject, so feel free to speak up if you know of any and I will update this article with each reliable and fast method.