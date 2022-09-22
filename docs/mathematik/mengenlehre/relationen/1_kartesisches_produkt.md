---
title: Kartesisches Produkt und Abbildungen
tags: [mathematik, mengenlehre, relation, kartesisches produkt]
sidebar_position: 2
---

In Mengen werden Objekte zusammengefasst, allerdings ohne innere Struktur,
d.h. sie sind einfach in der Menge ohne Bedeutung und ohne Reihenfolge.
Manchmal benötigt man jedoch so etwas wie eine Reihenfolge oder 
möchte Mengen miteinander in eine gewisse Verbindung bringen, ohne sie einfach nur zu Vereinigen.

## Kartesisches Produkt
:::note Geordnete Paare

Ein *geordnetes Paar* (*2-Tupel*) mit den Elementen $a$ und $b$ ist wie folgt als Menge definiert:
$$
    (a, b)\ :=\ \{ \overbrace{\{a, b\}}^{\text{Elemente des Tupels}}, \underbrace{\{a\}}_{\text{Erstes Element}} \}
$$ 

:::
Ein 2-Tupel fasst also je zwei Elemente zusammen und bestimmt dabei, welches zuerst kommt.
Anders als bei Mengen, bei denen $\{a,b\} = \{b,a\}$ gilt, gilt bei 2-Tupeln demnach $(a,b) \ne (b,a)$.
Die andere Schreibweise $()$, statt $\{\}$, soll dies verdeutlichen und dazu führen, dass man diese nicht verwechselt.

Ein Verband haben wir als ein *Tripel* eingeführt.
Ein Tripel ist ein 3-Tupel.
Allgemein lassen sich rekursiv n-Tupel wie folgt definieren:

:::note n-Tupel

- 1-Tupel: $(x_1) = \{ x_1 \}$
- 2-Tupel: $(x_1, x_2) = \{ \{x_1, x_2\}, \{x_1\} \}$
- 3-Tupel: $(x_1, x_2, x_3) = ((x_1, x_2), x_3)$
- n-Tupel: $(x_1, x_2, \dots, x_n) = ((x_1, x_2, \dots, x_{n-1}), x_n)$

:::
n-Tupel lassen sich also auf die Mengendarstellungen der 2-Tupel zurückführen.
In der Typentheorie nach Russell, die im Kapitel über [Mengen](../mengen) eingeführt wurde ist dies allerdings nicht erlaubt.
Denn schon bei einem 3-Tupel gibt es eine Vermischung verschiedener Mengenstufen:
$$
    \begin{align*}
        (a, b, c)   &= ((a, b), c)\\
                    &= \{\ \{(a,b), c\},\ \{(a,b)\}\ \}\\
                    &= \{\ \{\ \underbrace{\{\{a,b\}, \{a\}\}}_{(a,b)},\ c\},\ \{\underbrace{\{\{a,b\}, \{a\}\}}_{(a,b)}\}\ \}\\
                    &= \{\ \{\ \underbrace{\{\{a,b\}, \{a\}\}}_{\text{Menge 2. Stufe}},\ \underbrace{c}_{\text{Menge 0. Stufe}}\},\ \{\{\{a,b\}, \{a\}\}\}\ \}
    \end{align*}
$$
Im Stufensystem ist dieser Ausdruck also nicht korrekt.
In anderen axiomatisierten Mengenlehren ist es allerdings erlaubt.
Auch für das Stufensystem gibt es korrekte Definitionen für n-Tupel.
Wir wollen es an dieser Stelle allerdings dabei belassen und nehmen es einfach hin.

Man kann nun Tupel zu einer Menge zusammenfassen.
Die Menge aller Tupel von Mengen nennt man *kartesisches Produkt*:

:::note Kartesisches Produkt

Seien $A$ und $B$ Mengen, dann ist das *kartesische Produkt* der Mengen $A$ und $B$ definiert als
$$
    A \times B\ :=\ \{ (a,b)\ |\ a \in A \wedge b \in B \}
$$

:::

## Abbildungen
Das kartesische Produkt erlaubt es uns jetzt Paare in einer Menge zusammenzufassen.
Daraus können wir nun eine Teilmenge betrachten.

:::note Relation

Seien $A$, $B$ Mengen.
Man nennt $R$ *Relation* oder *Korrespondenz* __aus__ $A$ __in__ $B$ $:=\ R \subseteq A \times B$

:::

#### Beispiele
Nehmen wir eine Menge mit drei Elementen $A = \{a_1, a_2, a_3\}$ und bilden alle möglichen Paare.
Diese Paare fassen wir nun in einer Menge zusammen: 
$$
    A \times A = \{(a_1, a_1), (a_1, a_2), (a_1, a_3),\quad (a_2, a_1), (a_2, a_2), (a_2, a_3),\quad (a_3, a_1), (a_3, a_2), (a_3, a_3)\}
$$
Daraus können wir jetzt bspw. unterschiedliche Relationen basteln:
$$
    \begin{align*}
        R_0 &= \emptyset\\
        R_1 &= \{(a_1, a_1), (a_1, a_3)\}\\
        R_2 &= \{(a_1, a_1), (a_1, a_3), (a_2, a_2), (a_2, a_3), (a_3, a_3)\}\\
        R_3 &= \{(a_2, a_1), (a_2, a_2), (a_2, a_3)\}\\
        R_4 &= A \times A
    \end{align*}
$$

Gegeben sei $A = \{1, 2, 3, 4, 5\}$, $B = \{a, b, c, d\}$ und $R = \{(1, a), (1,d), (2, b), (3, b), (5, d)\} \subseteq A \times B$.
Man kann das veranschaulichen, wie die jeweiligen Elemente in Beziehung stehen:

![Relation R veranschaulicht durch Pfeile](/img/mathematik/mengenlehre/relationen/relation.png)

*tbc*