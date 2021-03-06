# ๐ย Job Search (English)

๐ฐ๐ทย  **For Korean user**: ์คํฌ๋กค๋ค์ด์ ํ๋ฉด ํ๊ตญ์ด๋ก๋ ํ๋ก์ ํธ ์ค๋ช์ ๋ณด์ค ์ ์์ต๋๋ค.

## โจ Introduction

Job Search is a small API where you can filter three options from the results page of Saramin.

1. Number of years since the company has been established
2. Revenue of the company
3. Number of employees

FYI, [Saramin](https://www.saramin.co.kr/) is one of the biggest Korean employment websites for job listings. You can think of it as Korean Indeed! : )

### Problem

![Saramin](https://user-images.githubusercontent.com/83247825/163704800-17cc6fe0-9467-470d-b437-1263cef4b2fd.png)

Saramin provides job titles, locations and occupations for job search. You are likely to receive a lot of job postings that donโt match your preferences on the result page.

### Idea

My team came up with the idea of adding more search filters to narrow down the job postings and show relevant result data on the table.

## ๐ย Demo

![Job Search](https://user-images.githubusercontent.com/83247825/163704640-e427dc00-af2f-4a16-a2e9-7d812a624411.png)

๐ย  [Click here to see Mockup on Behance](https://www.behance.net/gallery/141657723/Search-Jobs)

## โ๏ธย Main Feature

- Crawling: Crawled the job posting data from Saramin and displayed them on the table
- Filtering: Added three options that filter the job posting data on the table

## ๐ชย Tech Stack

#### Design [@hyeonahc](https://github.com/hyeonahc)

- Adobe XD

#### Front-End [@hyeonahc](https://github.com/hyeonahc)

- React, Context API, React Table, Scss (the style will be applied to the project soon)

#### Back-End [@rerun1129](https://github.com/rerun1129)

- Java, Spring

๐ย  [Click here to see the back-end repository: job_search_back](https://github.com/rerun1129/job_search_back)

## ๐ Project Review

### The most challenging parts

1. **Context API**

   When I created projects with React, Iโve been using state only locally (within the same component). I managed the state globally using the context API library for the first time in which I struggled with applying context API to my project. I would like to practice this feature more and use Redux for my next project.

2. **React Table**

   I used React Table library to easily insert data into the table and added the pagination feature. The most challenging part was quickly picking up the right information. Also, I found that it took more time for me to learn how to use the new library. My next goal is to experience more new libraries.

3. **Communication with back-end developers**

   Throughout the project, I found it difficult to understand the back-end developer (Even though it was in my native language, Korean) There were some new terms and a situation I never experienced before. I learned that itโs important to understand the bigger picture, the overall web development process, and to communicate with back-end developers as well as understand how the client-side receives the data from the back-end.

### Areas of improvement

1. **Add .gitignore file in the beginning of the project**

   I added .gitignore file later in the project which led to including unnecessary files(cache, node_mdules) in the git history.

2. **Make the meaningful commit**

   The best practice is committing when a certain feature is built. Thatโs something I didnโt know. I committed whenever I felt like it, which led to messing up the commit history.

3. **Keep the commit message convention**

   I didnโt follow the common commit message convention which made it hard to figure out what the commit is about.

---

# ๐ย Job Search (ํ๊ตญ์ด)

## โจ ์๊ฐ

Job Search๋ [์ฌ๋์ธ](https://www.saramin.co.kr/zf_user/) IT/๊ฐ๋ฐ ์ง์๊ตฐ ๊ฒ์๊ฒฐ๊ณผ์์ ์ธ๊ฐ์ง ํํฐ๋ง ์ต์์ ์ถ๊ฐํ์ฌ ํ์ด๋ธ๋ก ์ ๋ฆฌํด์ฃผ๋ ๊ฐ๋จํ API์๋๋ค.

1. ์๋ ฅ
2. ๋งค์ถ์ก
3. ํ์ฌ์ฌ์์

### Problem

![Saramin](https://user-images.githubusercontent.com/83247825/163704800-17cc6fe0-9467-470d-b437-1263cef4b2fd.png)

์ฌ๋์ธ์์ ๊ตฌ์ธ์ ๋ณด๋ฅผ ๊ฒ์ํ ๋ ๋ด๊ฐ ์ ํธํ๋ ํ์ฌ ์กฐ๊ฑด์ ํํฐ๋งํด์ฃผ๋ ๊ธฐ๋ฅ์ด ์์ด ๋ถํธํจ์ ๋๊ผ๋ค.

### Idea

๊ตฌ์ธ์ ๋ณด์์ ํ์ฌ ์๋ ฅ, ๋งค์ถ์ก, ํ์ฌ์ฌ์์ ํํฐ๋ง ์ต์์ ์ถ๊ฐํด์ ํ์ด๋ธ๋ก ์ ๋ฆฌํด์ฃผ๋ฉด ์ด๋จ๊น?

## ๐ย ๋ฐ๋ชจ

![Job Search](https://user-images.githubusercontent.com/83247825/163704640-e427dc00-af2f-4a16-a2e9-7d812a624411.png)

๐ย  [Behance์์ Mockup ๋ณด๋ฌ๊ฐ๊ธฐ](https://www.behance.net/gallery/141657723/Search-Jobs)

## โ๏ธย ์ฃผ์ ๊ธฐ๋ฅ๊ณผ ๋ก์ง

- ํฌ๋กค๋ง: ์ฌ๋์ธ์์ IT/๊ฐ๋ฐ ์ง๊ตฐ์ ํ์ฌ ์ค๋ฆฝ์ผ, ๋งค์ถ์ก, ํ์ฌ์ฌ์์ ์ ๋ณด๋ฅผ ๋ถ๋ฌ์ ํ์ด๋ธ์ ๋ณด์ฌ์ค๋ค
- ํํฐ๋ง: ํ์ฌ ์ค๋ฆฝ์ผ, ๋งค์ถ์ก, ํ์ฌ์ฌ์์์ ์ธ๋ถ ๊ฒ์ ๊ธฐ๋ฅ์ ์ถ๊ฐํ๋ค

## ๐ชย ๊ธฐ์  ์คํ

#### Design [@hyeonahc](https://github.com/hyeonahc)

- Adobe XD

#### Front [@hyeonahc](https://github.com/hyeonahc)

- React, Context API, useTable, Scss (๋์์ธ ์ ์ฉ ์์ )

#### Back [@rerun1129](https://github.com/rerun1129)

- Java, Spring

๐ย  [๋ฐฑ์๋ ๋ฆฌํฌ์งํ ๋ฆฌ: job_search_back ๋ณด๋ฌ๊ฐ๊ธฐ](https://github.com/rerun1129/job_search_back)

## ๐ ํ๋ก์ ํธ ๋ฆฌ๋ทฐ

### ํ๋ก์ ํธ๋ฅผ ํ๋ฉด์ ์ด๋ ค์ ๋ ์ 

1. **context API์ ์ฌ์ฉ**

   ์ง๊ธ๊น์ง ๋ฆฌ์กํธ ํ๋ก์ ํธ๋ฅผ ํ ๋ state๋ฅผ ์ปดํฌ๋ํธ ๋ด๋ถ์์๋ง ์ฌ์ฉํ์๋ค. ์ด๋ฒ ํ๋ก์ ํธ๋ฅผ ์งํํ๋ฉด์ ์ฒ์์ผ๋ก context API๋ฅผ ์ฌ์ฉํ์ฌ ์ ์ญ์ ์ผ๋ก state๋ฅผ ๊ด๋ฆฌํด์ฃผ์๋ค. ์์ง ์ฌ์ฉ๋ฒ์ ์ต์ํ์ง ์์ ํ๋ก์ ํธ์ ์ ์ฉํ๋๋ฐ ๋ง์ ์ด๋ ค์์ด ์์๋ค. ๋ฆฌ์กํธ์์ ์ ์ญ์ ์ผ๋ก ๋ฐ์ดํฐ๋ฅผ ์ฒ๋ฆฌํ๋ ๋ฐฉ๋ฒ์ ๋ ๊ณต๋ถํด๋ณด๊ฒ ๋ค. ๋ค์ ํ๋ก์ ํธ์์ ์ ์ญ์ ์ผ๋ก ์ํ๊ด๋ฆฌ๋ฅผ ํ ๋๋ redux๋ฅผ ๊ณต๋ถํด ์ฌ์ฉํด๋ณด๊ณ  ์ถ๋ค.

2. **React Table ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ฌ์ฉ**

   ๊ณต์๋ฌธ์์ ์ ํ๋ธ ๊ฐ์๋ฅผ ๋ณด๋ฉฐ React Table ์ฌ์ฉ๋ฒ์ ์ตํ๋ฉด์ ํ๋ก์ ํธ์ ์ ์ฉํด๋ณด์๋ค. ์์ง๊น์ง๋ ๊ณต์๋ฌธ์๋ฅผ ํ์ํ๋ ์๋๊ฐ ๋๋ฆฌ๊ณ  ์๋ก์ด ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ๋ง๋ฌ์๋ ์ฌ์ฉ๋ฒ์ ์ตํ๋๋ฐ ์ค๋ ์๊ฐ์ด ๊ฑธ๋ฆฐ๋ค. ์๋ก์ด ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ ํ๋ ๊ฒ์ ๋๋ ค์ํ์ง ์๊ณ  ์์ด๋ก ๋ ๊ณต์๋ฌธ์๋ฅผ ์์ฃผ ์ ํด์ผ๊ฒ ๋ค.

3. **๋ฐฑ์๋ ๊ฐ๋ฐ์์์ ์ํต๋ฌธ์ **

   ํ๋ก์ ํธ๋ฅผ ์งํํ๋ฉด์ ํจ๊ป ์์์ ํ๋ ๋ฐฑ์๋ ๊ฐ๋ฐ์์ ๋ง์ ์ดํดํ๋๋ฐ ์ด๋ ค์์ด ์์๋ค. ์ด๋ฅผ ๊ทน๋ณตํ๊ธฐ ์ํด ์น๊ฐ๋ฐ์ ๋ํ ์ ๋ฐ์ ์ธ ํ๋ฆ์ ์ดํดํ๋ ๊ฒ์ด ์ค์ํ๋ค๊ณ  ๋๊ผ๋ค. ํนํ ํ๋ก ํธ์ ๋ฐฑ์๋ ์ฌ์ด์์ ์ด๋ป๊ฒ ๋ฐ์ดํฐ๋ฅผ ๋ฐ์์ค๋์ง์ ๋ํ ๊ณต๋ถ๋ฅผ ํด ๋ค์ ํ๋ก์ ํธ์์๋ ์์ฌ์ํต์ ์ด๋ ค์์ ์ค์ด๋ ๊ฒ์ ๋ชฉํ๋ก ์ผ๊ฒ ๋ค.

### ํ๋ก์ ํธ๋ฅผ ํ๋ฉด์ ์์ฌ์ ๋ ์ 

1. **.gitignore ์ ์ฉ์ ๋ค๋ฆ๊ฒ ํ๋ค**

   GitHub์ ์ฌ๋ผ์ค์ง ์์๋๋  cache, node_modules์ ๋ํ ๋ณ๊ฒฝ ์ ๋ณด๋ ๊ฐ์ด ์ปค๋ฐ๋์ด commit history๊ฐ ์ง์ ๋ถํด์ง๋ ๊ฒฐ๊ณผ๋ฅผ ์ด๋ํ๋ค.

2. **๊น ์ปค๋ฐ ๋ฉ์์ง ์ปจ๋ฒค์์ ์ง์ผ์ฃผ์ง ๋ชปํ๋ค**

   ๊น ์ปค๋ฐ ๋ฉ์ธ์ง์ ๋ํ prefix, convention์ ๋ํ ์ฌ์  ์ง์์ด ์์ด ๊ธฐ๋ฅ๋ณ๋ก ์ปค๋ฐ์ ํ์ง ๋ชปํ๊ณ  ๊ฒฐ๊ณผ์ ์ผ๋ก commit๋ณ๋ก ๋ด๊ฐ ์ด๋ค ์์์ ํ๋์ง ํ์ํ๊ธฐ๊ฐ ์ด๋ ค์์ก๋ค.

### ์์ฌ์ ๋์ ์ ๋ณด๊ฐํ๊ธฐ ์ํด ๊ณต๋ถํ ๋ด์ฉ

- [[๊น] ๊น ์ปค๋ฐ ๋ฉ์์ง ์ปจ๋ฒค์ (๊น ๋ฉ์ธ์ง ์์ฑ๋ฒ)](https://maplecoding.tistory.com/104?category=1268568)
- [[๊น] ์ปค๋ฐ ๋ฉ์ธ์ง ์์ฑ์ ํ์ํ ์ปค๋ฐ ์ ํ(prefix) ์ ๋ฆฌ](https://maplecoding.tistory.com/101?category=1268568)
- [[๊น] ๊น ์ฌ๋ฐ๋ฅธ ์ฌ์ฉ๋ฒ (์์ข์ ์ต๊ด)](https://maplecoding.tistory.com/99?category=1268568)
