---
title: Mengenbildung und Mengenalgebra
tags: [mathematik, mengenlehre, mengenbildung, mengenalgebra]
sidebar_position: 2
---

Bereits in der [Einführung zur Mengenlehre](./#über-die-mengenlehre) wurde angemerkt, 
dass die heute verwendete Mengenlehre nicht mehr die naive Mengenlehre nach Cantor ist,
sondern eine axiomatisierte Mengenlehre, die man *Zermelo-Fraenkel-Mengenlehre* (kurz *ZF* oder auch *ZFC*)[^1] nennt, ist.
Diese Mengenlehre "enthält" die naive Mengenlehre und merzt die gezeigten Widersprüche aus.
Diese Axiomatisierung wird hier allerdings nicht direkt vorgestellt oder explizit genannt.
Stattdessen werden manche Axiome beiläufig eingeführt.
Es können auch Axiome vorkommen, die in anderen Axiomatisierungen der Mengenlehre auftreten.

## Mengenbildung
*Bertrand Russell* entwickelte die *Typentheorie*, nach der man die Mengenlehre auch stufenweise aufbauen kann.
Hierbei gibt es eine kleinste Stufe, deren Elemente man *Urelemente* oder *Urmengen* nennt.

:::note Stufenaufbau nach Russell

$$
    \begin{array}{c|c||c}
        \text{formale Benennung} & \text{häufige Benennung} & \\
        \hline\hline
        X^0, Y^0, \dots & a, b, c, \dots & \text{Mengen 0. Stufe (Urelemente / Urmengen)}\\
        X^1, Y^1, \dots & A, B, C, \dots & \text{Mengen 1. Stufe}\\
        X^2, Y^2, \dots & \mathfrak{A}, \mathfrak{B}, \mathfrak{C}, \dots & \text{Mengen 2. Stufe}\\
        \vdots & & \vdots\\
        M^n & & \text{Menge n-ter Stufe}
    \end{array}
$$

:::

#### Beispiele
Dabei sind die Elemente der jeweiligen Stufe stets Elemente der vorigen Stufe.

Eine Menge von Urelementen ist also eine Menge erster Stufe: $M^1 = \{ X^0, Y^0 \} = \{ a, b \} = A$.

Eine Menge zweiter Stufe ist also eine *Menge von Mengen*: $M^2 = \{ X^1, Y^1 \} = \{\{ a, b, c \}, \{ x, y \}\} = \{ A, B \} = \mathfrak{A}$.
*Mengen von Mengen* oder ein *System von Mengen* nennt man auch häufig ein *Mengensystem*.
Mengensysteme spielen u.a. in der Maßtheorie eine wichtige Rolle, in der auch das Benennungsschema wiederzuerkennen ist.

Folgendes Axiom bildet eine Brücke zur Logik:

:::tip Mengenbildungsaxiom

Sei $H(M^n)$ Aussage über Mengen $n$-ter Stufe.
$$
    \begin{equation*}
        \exists M^{n+1}\ \forall M^n:\ M^n \in M^{n+1} \leftrightarrow H(M^n),
    \end{equation*}
$$
wobei $M^{n+1}$ nicht in $H(M^n)$ vorkommt.

:::
Das Mengenbildungsaxiom sagt aus, dass es eine Menge $M^{n+1}$ gibt, die aus den Elementen $M^n$ besteht, die eine gewisse Aussage erfüllen. 

#### Beispiele
Sei $n = 0$, dann können wir die Aussage im Satz mit den üblichen Benennungen wie folgt schreiben:
$$
    \begin{equation*}
        \exists A\ \forall x:\ x \in M \leftrightarrow H(x).
    \end{equation*}
$$
"$M^{n+1}$ kommt nicht in $H(M^n)$ vor" bedeutet, dass in $H(M^n)$ nirgends das Symbol $M^{n+1}$ auftauchen darf.
Deswegen ist $\exists A\ \forall x:\ x \in M \leftrightarrow x \notin M$, also ein Widerspruch, ausgeschlossen.
Denn in $H(x) = \text{"}x \notin M\text{"}$ taucht ja $M$ auf und das ist nicht erlaubt

Sei $n = 0$ und $H(x) = \text{"} x \text{ ist eine gerade natürliche Zahl"}$.
Alle Elemente $x$, die nun $H$ erfüllen liegen in einer Menge $A$:
$A = \{2, 4, 6, \dots\}$

So eine Aussagenform $H(x)$ nennt man auch *definierenden Ausdruck*. 
Man schreibt Mengen mit definierenden Ausdrücken häufig so:
$M = \{ x\ |\ H(x) \}$.

#### Beispiele
Das obige Beispiel mit den geraden natürlichen Zahlen schreibt man also so:
$M = \{ x\ |\ x \in \mathbb{N} \wedge x \text{ gerade} \}$

Weitere Beispiele sind:
- Menge aller deutschen Bundesländer: $M = \{ x\ |\ x \text{ ist deutsches Bundesland} \}$
- Menge aller reellen Zahlen von 0 bis 2: $M = \{ x\ |\ x \in \mathbb{R} \wedge 0 \le x \le 2 \}$
- Menge der ganzzahligen Lösungen einer Gleichung: $M = \{ x\ |\ x \in \mathbb{Z} \wedge x^2 + 2 = 4x - 1 \}$
- Menge aller ganzen Quadratzahlen: $M = \{ x\ |\ \exists y \in \mathbb{Z}:\ x = y^2 \}$

[^1]: Benannt nach *Ernst __Z__ermelo* und *Abraham __F__raenkel*. 
Das *C* steht für *choice* und steht für das *Auswahlaxiom*.
Je nachdem, ob man das Auswahlaxiom mit zu den Axiomen hinzunimmt kürzt man mit *ZF* oder eben *ZFC* ab.

:::note Extensionalitätsaxiom (ZF) / Gleichheit von Mengen

Zwei Mengen sind gleich, wenn sie die gleichen Elemente besitzen:
$$
    \begin{equation*}
        A = B\ :=\ \forall x:\ x \in A \leftrightarrow x \in B 
    \end{equation*}
$$

:::

## Mengenalgebra
*tbc*