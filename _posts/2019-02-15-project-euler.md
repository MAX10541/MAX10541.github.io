---
layout: post
title:  "Project Euler"
date:   2019-02-15
excerpt: "A bit about my experience with Project Euler."
misc: true
tag:
- misc
- ProjectEuler
- math
- programming
dependencies:
- chart.js
---
# About Project Euler

Quoting [Project Euler's website](https://projecteuler.net/):
>    <b>Project Euler</b> is a series of challenging mathematical/computer programming problems that will require more than just mathematical insights to solve. Although mathematics will help you arrive at elegant and efficient methods, the use of a computer and programming skills will be required to solve most problems.

I started solving Project Euler (PE from now on) problems in 2013. I was immediately *hooked*.

# Why?
You might ask.

I was addicted to recreational mathematics before starting to program. And then.. I became a Computer Science student at some university. I got addicted to programming too!

Imagine my joy when I knew I could do both at the same time!

# Tools I use
When I started, I was using Wolfram Mathematica alone. I didn't know much about programming back then, and using any other programming language seemed crazy to me. However, as time went by, and as problems got harder and harder, using Mathematica was not enough.

So I started using Python, and re-solved most of the problems using it.

From time to time, I use C++ or java for problems that require huge optimizations or speed.

I also use Processing to plot and draw some stuff (e.g. fractals).

# My activity on PE

Here are some charts about my activity on PE:


## Total problems solved over time
Each bin in the histogram is a month.

Notice how my activity suddenly raises and falls dramatically?

<canvas id="solvedOverTime"></canvas>


## Total problems solved per year
In 2016 and 2017 I was almost drowning in my full-time job (which I was enjoying), so I didn't have much time to solve PE problems. Also, I started to re-solve all the problems that I've already solved, but this time using Python rather than Wolfram Mathematica.

<canvas id="solvedPerYear"></canvas>



## Total problems solved per month of year
Looks like I solve during June more than all the other months with a huge margin.

At first I thought that was because of my university and the final exams. I tended to distract my self from studying by spending time on PE :). However, that thought was wrong.

That's actually because the first month I started on PE was June, and I solved in my first month alone about 100 problems!

Statistics can fool you sometimes :)

<canvas id="solvedPerMonth"></canvas>


## Total problems solved per day of week
Ah! Tuesdays!

Why the heck do I solve less in Saturdays?

<canvas id="solvedPerDay"></canvas>

<script type="text/javascript" src="{{ site.url }}/sketches/projecteuler.js"></script>
