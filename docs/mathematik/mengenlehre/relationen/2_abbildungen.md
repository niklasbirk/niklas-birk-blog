---
title: Abbildungen
tags: [mathematik, mengenlehre, relation, abbildung, funktion]
sidebar_position: 3
---

Eine der wichtigsten Relationen überhaupt stellen die *Abbildungen* da.
Sie tauchen überall in der Mathematik auf und in der Realität lassen sich viele Probleme durch diese 
speziellen Relationen darstellen.

## Funktionen
Bevor wir uns den Abbildungen widmen, definieren wir die Eindeutigkeit:

:::note Eindeutigkeit

Eine Relation $R \subseteq A \times B$ ist *eindeutig*, wenn
$$
    \forall x \in A\ \forall y, y' \in B:\ (x,y) \in R \wedge (x,y') \in R \rightarrow y = y'
$$

:::
Anschaulich gesprochen heißt das, dass von jedem $x$, das in der Relation $R$ vorkommt, nur ein Pfeil weggeht.
Gegeben seien $A = \{1, 2, 3, 4, 5\}$, $B = \{a, b, c, d\}$ und $R = \{(1,a), (1,d), (2,b), (3,b), (4,d)\} \subseteq A \times B$.
$R$ ist nicht eindeutig, da $(1,a)$ und $(1,d)$ vorkommen.
Laut Definition muss aber $y=y'$ gelten, wenn $x$ in $R$ enthalten, aber es gilt $a \ne d$.
Durch entfernen einer dieser Komponenten, z.B. $(1,d)$ wird $R$ eindeutig.
Im folgenden Schaubild ist links das ursprüngliche $R$ zu sehen, bei dem von der $1$ zwei Pfeile abgehen.
Rechts ist dann die eindeutige Relation, da von der linken Seite maximal ein Pfeil pro Element abgeht.
Bei der Eindeutigkeit ist es egal, wie viele Pfeile rechts auf ein Element zugehen, es geht nur um die linke Seite.

![Eindeutigkeit bei einer Relation dargestellt](/img/mathematik/mengenlehre/relationen/eindeutige_rel.png)

:::note Abbildung / Funktion

$f$ ist *Abbildung* oder *Funktion* von $A$ in $B$ $:=$
- $f$ ist Relation, also $f \subseteq A \times B$
- $D(f) = A$, also $f$ ist Relation *__von__ $A$ in $B$*
- $f$ ist eindeutig

:::
Man schreibt dafür: $f:\ A \rightarrow B$.  
Statt $R(x) = \{y\}$ wie bei normalen Relationen, schreibt man verkürzt $f(x) = y$, da das $y$ ja nun eindeutig ist.

Eine Funktion ordnet also jedem Element aus $A$ genau ein $y$ aus $B$ zu.

In der Analysis und auch in anderen mathematischen Gebieten findet man häufig eine alternative Einführung:

:::note Alternative Definition

$f:\ A \rightarrow B$ ist Funktion $:=$
$$
    \forall x \in A\ \exists ! y \in B:\ f(x) = y
$$

:::
Häufig wirds sie so eingeführt, ohne direkt auf das kartesische Produkt und Relationen zu verweisen.
In diesen Fällen wird dann der *Graph der Funktion* definiert als $G_f := \{(x,f(x))\ |\ x \in A \wedge f(x) \in B\} \subseteq A \times B$.
Aus mengentheoretischer Sicht stimmen also die Begriffe "Funktion" und "Graph der Funktion" in diesen Fällen überein.

## Grundlegende Eigenschaften von Funktionen
Die *Verkettung*, oder auch *Komposition*, $f \circ g: A \rightarrow C$ von Funktionen $f:\ A \rightarrow B$ und $g:\ B \rightarrow C$ ist wieder eine Funktion.
Jedoch ist das *Inverse* $f^{-1}$ einer Funktion $f$ im Allgemeinen keine Funktion mehr.

Zwei Funktionen $f$ und $g$ sind gleich $f=g$, wenn für alle $x$ gilt $f(x) = g(x)$.



## Operationen