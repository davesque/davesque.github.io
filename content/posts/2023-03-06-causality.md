---
title: "The Trouble with Causality"
date: 2023-03-06T14:31:45-08:00
draft: true
---

Somethings bugs me about causality.  For one, I often notice a kind of laziness
in the way the term is deployed.  This comes up a lot in discussions about
machine learning:

> **Alex:** *Hey look, my machine learning model does this cool thing!*
> 
> **Blain:** *Hold it!  Does it model causality?  How could it model causality
> when you just trained it by essentially showing it a long list of
> co-occurrences?  That could only possibly just model correlation!*
> 
> **Alex:** *Shoot, I guess you're right.  It still seems to work pretty well
> though!*
> 
> *...rinse and repeat...*

There's plenty of laziness to go around.  The common thing to point out is that
correlation is not the same thing as causation.  Of course, this is true.  But
there's a subtle flip side to this.

I feel the laziness in these discussions centers around the way in which the
stereotypical causality critic won't acknowledge the value of extremely strong
correlation.  That makes the lack of direct causal modeling seem more like a
technical note[^1].

And that brings me to the second thing that bugs me about causality: the
intuition I have that, in the limit, causality is really not much different
from simple correlation.  The concepts seem weirdly connected as though by some
logical wormhole.  This is more true in practice than in principal.

## The Correlation/Causality Wormhole

This last sentiment might seem a little controversial, so let's dig into it a
bit further. What could it mean that causality is like correlation?  I don't
have a lot of clear answers so much as a collection of "funny" things I've
noticed.  Here are a few examples.

1. Talking about how "random" functions can be made un-random by introducing
   another variable in the argument list that accounts for some previously
   unknown cause or relevant process.  In a way, a "random" function seems more
   like an incomplete function.  In a philosophical sense, it always seems
   possible to introduce another variable to incorporate information that can
   be used to more accurately predict an outcome.
2. Talking about the process through which causal "laws" are discovered.
   Thinking about the history of physics and science.  It seems to have often
   been the case that some law is formulated which eventually turns out to be
   inadequate.  Is it possible that this process could just be another form of
   moving from a model that merely correlated phenomena to one that represents
   causal relationships?  Doesn't the existence of a physical law (a causal
   model) always admit the possibility that

[^1]: Yes, I know I'm oversimplifying here.  Just bear with me.
