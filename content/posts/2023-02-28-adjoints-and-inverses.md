---
title: "Adjoints, Inverses, and AIs"
date: 2023-02-28T18:09:45-08:00
---

Here's a simple example showing the behavior of a matrix inverse:

\\[
\begin{align\*}
  A\mathbf{x} &= \mathbf{y} \\\\
  \iff \mathbf{x} &= A^{-1}\mathbf{y}
\end{align\*}
\\]

We're seeing that \\(\mathbf{y}\\) is \\(\mathbf{x}\\) transformed by \\(A\\).
So then \\(\mathbf{x}\\) is \\(\mathbf{y}\\) transformed by \\(A^{-1}\\). Many
matrices don't have inverses, so this is a brittle operation in a sense. The
"adjoint" of \\(A\\) (often written \\(A^{\*}\\)) works like this,

\\[
\begin{align\*}
  A\mathbf{x} &\cdot \mathbf{y} \\\\
  = \mathbf{x} &\cdot A^{*}\mathbf{y}
\end{align\*}
\\]

where "\\(\cdot\\)" is the familiar inner product between vectors. This can be
done for any complex valued matrix[^1].

So why compare the two?  If you squint a little, the two expressions are
similar, just with different operations in different places.  We see "\\(=\\)" in the
matrix inverse example in the same place that we see "\\(\cdot\\)" in the
adjoint example.  Same thing for "\\(\iff\\)" and "\\(=\\)".  Here's a table of
the related operations:

\\[
\begin{array}{r|c|c}
  \text{matrix} & A^{-1} & A^{*} \\\\
  \hline
  \text{comparison} & = & \cdot \\\\
  \hline
  \text{equivalence} & \iff & =
\end{array}
\\]

Equalities in the matrix inverse example are related through bi-implication.
Inner products in the adjoint example are related through equality.  The algebra
looks similar in either example and suggests something interesting about the
inner product: that it behaves like a kind of comparison.

It's worth thinking of equality and the inner product as being related in this
way.  Equality answers the question, "Are these things *the same*?  Yes or no?"
Inner products answer the question, "Are these things *similar*?  Answer anywhere
between \\(-|\mathbf{x}||\mathbf{y}|\\) and \\(|\mathbf{x}||\mathbf{y}|\\)."
The inner product is really like a more expressive kind of equality.

In linear algebra, everything generalizes a more basic concept.  Those
generalizations admit a much broader range of behaviors between objects.  The
inner product generalizes equality.  Even vectors themselves generalize the
concept of individual values (scalars).

Another generalization is the singular value decomposition (SVD).  The
eigen-decomposition can be viewed as a special case of the SVD for positive
semi-definite matrices[^2].  But as with the inverse, many matrices don't have
an eigen-decomposition.  In that case, you can still do SVD (for any complex or
real valued matrix) and get something with many of the same qualities.

It's no surprise then that linear algebra is so central to machine learning.
Linear algebra is a system that generalizes processes into high dimensions
where much more interesting things are possible.  That's a nice analogy for
comparing tasks that are easily performed by computers to those easily
performed by humans.  What's the difference between those things?  In a way,
it's the dimensionality.  There's much more detail in the "real" world (more
dimensions).  If you want exact answers, they're hard to find and often not
that interesting.

You can check for exact equality between high dimensional vectors, but is that
really all that useful?  The notion of strict equality covers so little of the
semantic territory that is possible between vectors.  Why not ask a question
that always yields more information?  Why not take the inner product?  Why get
hung up on not having the inverse when you can have the adjoint?

[^1]: And, by extension, any real-valued matrix \\(A\\) has an adjoint
  \\(A^T\\) (its transpose).
[^2]: For "normal" matrices more generally, meaning ones that commute with
  their conjugate transpose (\\( A^{\*}A = AA^{\*} \\)), the singular values are
  the absolute values of the eigenvalues.
