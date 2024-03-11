<textarea id="source">

<h1 class="slide-header">Formatting and Organizing with HTML</h1>

<span id=time-estimate class="color-grey-500">30 mins</span>

<p id="lesson-description">
  Although the core function of HTML is simply to structure the content of a webpage (another language is used to style that content), there are some handy tags for formatting and organizing text. In this lesson, we’ll learn how to leverage the most common formatting tags.
</p>

<h5 id="topics-header" class="color-grey-500">Topics</h5>

Styling Text with HTML Tags

<hr>

Semantic vs. Non-Semantic HTML

<hr>

Using Tags to Organize Content

<hr>

<a href="https://ga-create-api.s3.amazonaws.com/studyguides/formatting-and-organizing-with-da4d22.pdf" target="_blank" download="formtting_and_organizing_with_html_study_guide.pdf" class="ant-btn" data-trackable="true" data-track-category="study guide" data-track-section="lesson page" data-track-action="download study guide"><span role="img" class="anticon"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><g class="download_svg__nc-icon-wrapper"><path d="M8 12c.3 0 .5-.1.7-.3L14.4 6 13 4.6l-4 4V0H7v8.6l-4-4L1.6 6l5.7 5.7c.2.2.4.3.7.3z"></path><path data-color="color-2" d="M1 14h14v2H1z"></path></g></svg></span><span> Download Study Guide</span></a>

---

<h1 class="slide-header">Learning Objectives</h1>

<p>By the end of this lesson, you'll be able to:</p>

<ul>
  <li>Style text using HTML tags.</li>
  <li>Explain the difference between semantic and non-semantic HTML.</li>
  <li>Group HTML elements to create page sections.</li>
</ul>

---

<h1 class="slide-header">Options for Styling Text</h1>

In the future, you’ll be using multiple languages to shape and style a webpage, including CSS and JavaScript. 

However, there are also some HTML elements that allow for this. You may be familiar with the usual suspects from word-processing programs that also make appearances in HTML:

| Text Style | HTML Element Tags | 
| -------- | -------- | 
| **bold text**    | `<strong>  </strong>`     | 
| _italic text_    | `<em> </em>`     | 

When adding these tags to HTML, they should wrap around the text element you want to style, like so:
```HTML
<p>Can’t Buy <strong>Me</strong> Love</p>
```

**Note**: The “em” in the italic text tag stands for _emphasis_.

---

<h1 class="slide-header">Styling Text</h1>

Let’s add some style to your roommate Zelda’s website!

Go ahead and practice applying the  `<strong>` and `<em>` tags to Zelda’s site:
1. Use `<em>` to italicize the “Is” in the song title “Love is Weird” (because, you know, it really is!).
2. Use `<strong>` to bold the words “Darkness” and “Dark” in the song title “Darkness in the Dark.”

---

<h1 class="slide-header">Adventures in HTML Styling</h1>

What would happen if we added a `<strong>` tag to the `<h1>` text: Kasserole?

Not much happens! That’s because all of the heading tags — `<h1-6>` — come with some default styling that make them bold already. Adding `<strong>` won’t make the `<h1>` double-bold. But what if you try adding an `<em>` tag to Kasserole? Magical italics appear!
  
All this to say: Some styling tags work on some HTML elements but not others. If you add a tag and nothing happens, don’t fret! When you learn CSS, you’ll be able to apply much more specific styling to any text element you like.

---

<h1 class="slide-header">Organizing Content on a Webpage</h1>

Now that you’ve styled your text, let’s see what HTML offers up in terms of page organization. 

HTML has tags that make it easy to organize and keep track of all the content you add to a webpage. While these tags won’t add new content, they’ll wrap around several elements to say, “These are all related to each other!” Using organizational tags also allows you to apply specific styles to specific parts of your webpage when you start using CSS.

There are lots of organizational tags, which we can group into two major types:

| Semantic HTML Tags | Non-Semantic HTML Tags |
| --- | --- |
| Tell you something about the content they contain. | Don’t tell you much about the content they contain. |
| Indicate how the content will be displayed on the webpage. | Are used more generally to organize groups of elements. |
| `<header>`, `<main>`, `<footer>`, `<article>`, `<aside>`, `<nav>` | `<div>`, `<span>` |

---

<h1 class="slide-header">Semantic HTML</h1>

Semantic HTML helps you introduce meaning _and_ organization to your webpages. Most webpages have some common elements; a navigation bar that takes you to different parts of a website, along with a main section of content.

As a developer, it’s helpful to keep track of where all of the content you are adding to a webpage will go. This also helps browsers read and make sense of that content. When a browser sees a `<nav>` tag on a website, it knows, “Hey! This is the navigation. It will help people get around the site and tells me what content is here. Thanks for the heads up!”

Here’s how you might use some common semantic HTML tags (<a href="https://www.w3schools.com/html/html5_semantic_elements.asp" target="_blank" rel="noreferrer noopener">click here for a complete list</a>):

![link text](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/html-unit-assets/intro-to-html/website-sections.png)

---

<h1 class="slide-header">Knowledge Check</h1>

Let’s look at Kasserole’s website. Which semantic tag might we add around `<h1>` and `<h3>` to group them together?

  ```html
  <h1>Kasserole</h1>
  <h3>Critics dub Kasserole the Metallica of modern times.</h3>
  <p>Out of the oven and into your soul.</p>
  <p><a href="https://www.youtube.com/watch?v=vm32-ted2rI" target="_blank">Rock out to a demo.</a></p>
  <p><a href="https://pitchfork.com/" target="_blank">Check out our reviews on Pitchfork.</a></p>
  <h2>Song List.</h2>
  <ul>
    <li>Ogre Blood Ballad</li>
    <li>Love is Weird</li>
    <li>Just Because</li>
    <li>Darkness in the Dark</li>
  </ul>
  ```
  <fieldset>
    <legend>Please select one of the following</legend>
    <input type="radio" name="action" id="main-answer" value="main"  /><label for="event">main</label><br />
    <input type="radio" name="action" id="nav-answer" value="nav" /><label for="message">nav</label><br />
    <input type="radio" name="action" id="header-answer" value="header" correct="true"/><label for="track">header</label><br />
    <input type="radio" name="action" id="article-answer" value="article"  /><label for="event">article</label><br />
  </fieldset>
  <button class="ant-btn ant-btn-primary multiple-choice-radio-submit">Submit Answer</button>
---

<h1 class="slide-header">Non-Semantic HTML</h1>

Sometimes, you just need to group things together, and the result won’t make up a specific part of a website. In this case, you’d use a handy non-semantic HTML tag:
* A `<div>` groups several elements together.
* A `<span>` groups just a few words.

Non-semantic tags help you organize your content in HTML, but they’re especially important when you start styling your content with CSS. What if you have a header, paragraph, and list that are all related to the same topic and you want to give them the same style? You could group them all in a `<div>` and then add CSS styling to the `<div>` that applies to all of the elements it contains.

---

<h1 class="slide-header">Non-Semantic Tags</h1>

## div 

`<div>` stands for division, as in the _division_ of content. Think of `<div>` tags as a way to group the information on your webpage into logical sections. After that, you can style all of the elements in that section similarly without affecting other nearby elements.

A `<div>` tag will wrap around HTML elements and group them together, like so:
```html
<div>
  <h2>The start of a very important section.</h2>
  <p>This section has content that’s all related in some way.</p>
  <p>So we want to group it together and set it off from the rest of a page.</p>
  <p>That’s why we wrapped all of this in a div!</p>
</div>
```

## span

You can also group content on a smaller level — within a sentence or paragraph — using the `<span>` tag. Maybe you want the first word in a sentence to be a different color, or a larger size. You can wrap simply that word in `<span>`!

`<span>`’s syntax is similar to that of the `<strong>` and `<em>` tags we learned about earlier in this lesson.

```html
<p>I want to call out <span>these words</span> in this sentence, but none of the other ones.</p>
```
---

<h1 class="slide-header">The div Challenge</h1>

Your challenge: In a new `<div>` container, add a header and list of band members to the webpage.

  Follow these steps:
  1. Beneath the picture of the casserole, open up a `<div>`.
  2. In the `<div>`, add an `<h2>` with text that reads: `Band Members`
  3. After the `<h2>`, add an _unordered_ list element opening tag. 
  4. Add the following four band members as list items and close the `<ul>`. 
      * Zelda Ziggler: Lead vocals
      * Billy Chu: Lead guitar and backup vocals
      * JP Parthasarathy: Bass guitar
      * Plum Porter: Percussion
  5. Close the `<div>`.
  
Happy organizing! 

---

<h1 class="slide-header">Conclusion</h1>

In this lesson, you’ve upped your HTML game. Your new skills include:

* Styling text (bold, italics) with `<em>` and `<strong>` tags.
* Chunking out a webpage into sections with semantic tags like `<main>` and non-semantic tags like `<div>` and `<span>`.

Zelda’s website — while no work of art — certainly has important information that tells a story about Kasserole.

---


<h1 class="slide-header">Code Challenge</h1>

<iframe height="500" style="width: 100%;" scrolling="no" title="Code Challenge Test" src="https://codepen.io/Ryan-Brodsky/embed/VwNwXqq?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/Ryan-Brodsky/pen/VwNwXqq">
    Code Challenge Test</a> by Ryan Brodsky (<a href="https://codepen.io/Ryan-Brodsky">@Ryan-Brodsky</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>

---

<h1 class="slide-header">Multiple Choice Question</h1>

<fieldset>
  <legend>Please select one of the following</legend>
  <input type="radio" name="action" id="track" value="track" correct="true"/><label for="track">Correct Answer</label><br />
  <input type="radio" name="action" id="event" value="event"  /><label for="event">Incorrect</label><br />
  <input type="radio" name="action" id="message" value="message" /><label for="message">Incorrect</label><br />
</fieldset>
<button class="ant-btn ant-btn-primary multiple-choice-radio-submit">Submit Answer</button>

<fieldset>
  <legend>Please select all that apply</legend>
  <input type="checkbox" id="uniqueAnswer" name="unique" correct="true"/><label for="uniqueAnswer">Correct Answer</label><br />
  <input type="checkbox" id="uniqueAnswer2" name="unique2" /><label for="uniqueAnswer2">Incorrect Answer</label><br />
  <input type="checkbox" id="uniqueAnswer3" name="unique3" correct="true"/><label for="uniqueAnswer3">Correct Answer</label><br />
</fieldset>

<button class="ant-btn ant-btn-primary multiple-choice-checkbox-submit">Submit Answer</button>

---

<h1 class="slide-header">Cards Slide</h1>

<details>
  <summary>Vocabulary Term</summary>
  
  <p class="transcript-text">
    Definition when "flipped" by the student
  </p>
</details>

<details>
  <summary>Vocabulary Term</summary>
  
  <p class="transcript-text">
    Definition when "flipped" by the student
  </p>
</details>

---

<h1 class="slide-header">Conclusion</h1>

</textarea>