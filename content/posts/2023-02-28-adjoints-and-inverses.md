---
title: "Adjoints, Inverses, and AIs"
date: 2023-02-28T18:09:45-08:00
author: David Sanders
---

I've been doing some reading about "adjoints" which are often contrasted with
"inverses" in mathematics.  Here's a simple example illustrating the behavior
of a matrix inverse:

\\[
\begin{align}
  A\mathbf{x} &= \mathbf{y} \\\\
  \implies \mathbf{x} &= A^{-1}\mathbf{y}
\end{align}
\\]

We're just seeing that \\(A^{-1}\\) undoes the transformation done by \\(A\\)
to \\(\mathbf{x}\\) to get \\(\mathbf{y}\\).  This is only something that's
possible for "nice" (non-singular) matrices. Better hope your matrix is nice.
By contrast, the "adjoint" of \\(A\\) (often denoted \\(A^{\*}\\)) works in
this way:

\\[
\begin{align}
  A\mathbf{x} &\cdot \mathbf{y} \\\\
  = \mathbf{x} &\cdot A^{*}\mathbf{y}
\end{align}
\\]

...where "\\(\cdot\\)" is just the inner product (dot product) defined for a
vector space.  This can be done for any complex valued matrix[^1].

There's a reason I placed the "\\(=\\)" (in the first system of equations) in
the same horizontal position as the "\\(\cdot\\)" (in the second system).  So
too for the "\\(\implies\\)" and the "\\(=\\)" in the second. They're
positioned similarly because they seem to play similar roles in either example.
Between the examples, we have the following analogues:

\\[
\begin{array}{r|c|c}
  \text{action} & A^{-1} & A^{*} \\\\
  \hline
  \text{comparison} & = & \cdot \\\\
  \hline
  \text{relation} & \implies & =
\end{array}
\\]

More explicitly, it seems that inverses establish a *directional* relationship
between equalities through implication[^2].  On the other hand, adjoints
establish a *directionless* relationship between dot products through equality
(by showing how those dot products can be equal).

It never occurred to me quite this way before.  The idea of equality and the
dot product seem closely related.  Equality answers the question, "Are these
things *the same*?  Yes or no?"  Dot products answer the question, "Are these
things *similar*?  Answer as you please (between \\(0\\) and \\(|\mathbf{x}|
|\mathbf{y}|\cos \theta\\))[^3]."  In that sense, the dot product is really like a
more communicative kind of equality comparison.

In linear algebra, everything seems to generalize a more basic concept.  Those
generalizations admit a much broader range of behaviors that could occur
between objects that we're working with. The dot product generalizes equality.
Even the basic constituents of linear algebra (vectors) sort of generalize the
concept of individual values (scalars).

Another generalization is the singular value decomposition (SVD).  The
eigen-decomposition can be viewed as a special case of the SVD for normal
matrices[^4].  But if your matrix isn't that nice, don't worry!  You can still
do SVD for literally any complex (or real) valued matrix and get something with
many of the same qualities.  It's just that SVD sometimes also coincides with
the eigen-decomposition which is more limited.  Maybe that's the SVD
periodically poking its head out from the ocean of high dimensionality.

On some level, this speaks to the utility of linear algebra in the context of
machine learning.  Linear algebra, and related topics like tensor calculus, are
systems that generalize processes into high dimensions where much more
interesting things are possible.  That's a nice analogy for comparing tasks
that are easily performed by computers to those easily performed by humans.
What's the difference between those things?  Well, in a way, it's the
dimensionality! There's much more detail in the "real" world (more dimensions).
If you want exact answers, they're hard to find and often not that interesting.

Put another way, yes you can check for exact equality between high dimensional
vectors, but why would you even want to know that in many cases?  That's like
doubting if one apple could be as good as another because it's made up of
different atoms.  The notion of strict equality covers so little of the
semantic territory that is possible with a high dimensional vector.  Why not
ask a question that always tends to give more information in the answer?  Why
not take the dot product? Likewise, why get hung up on not having the inverse
when you can have the adjoint?

[^1]: And, by extension, any real-valued matrix \\(A\\) has an adjoint
  \\(A^T\\) (its transpose).
[^2]: We say "directional" here because saying that \\(P \implies Q\\) does
  *not* mean you can just turn around and say \\(Q \implies P\\).  So
  implication is directional.
[^3]: ...and with a nice smooth curve too!
[^4]: A "normal" matrix in this context means one that commutes with its
  conjugate transpose (\\( A^{\*}A = AA^{\*} \\)).
