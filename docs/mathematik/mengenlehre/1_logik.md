---
title: Logik
tags: [mathematik, mengenlehre, logik]
sidebar_position: 1
---

# Logik
Die Mathematik ist wie eine eigene Sprache.
Wer sich mathematische Texte angeschaut hat, der wird sich vielleicht gewundert haben, was das alles für Symbole sind.
Die Symbole der Mengenlehre und auch der Logik werden dazu verwendet, um mathematische Sätze, Definitionen und Beweise kurz zu formulieren.
Doch nur Symbole an sich haben erst einmal wenig Bedeutung.
Erst durch die Regeln der Logik selbst, haben die Symbole eine Bedeutung.
Die Symbole und Schreibweisen selbst nennt man *Syntax*.
Syntax regelt das gültige Zusammensetzen von Zeichen.
Die *Semantik* wiederum gibt nun den syntaktisch korrekten Formeln eine Bedeutung, also wie sie zu interpretieren sind.
Die Syntax und die Semantik hängen in der Logik durchaus eng zusammen, da sie nach ähnlichen Regeln definiert sind, doch sollte man diese nicht verwechseln.

## Aussagenlogik (PL 0)
Die *Aussagenlogik* oder auch *Prädikatenlogik 0. Stufe* (*PL0*) beschäftigt sich mit *Aussagen*.

:::note Aussagen

*Aussagen* sind Sachverhalte in sprachlicher Form, die in der objektiven Realität vorliegen oder denkbar sind.

:::

Diese Definition wirkt etwas sperrig.
Eine andere Definition wäre:

:::note Aussagen

Eine *Aussage* ist ein sprachliches Gebilde, dem eindeutig ein
*Wahrheitswert* (*wahr* oder *falsch*) zugeordnet werden kann.

:::

Diese Definition verknüpft allerdings schon ein bisschen die Syntax (sprachliches Gebilde) mit Semantik (Wahrheitswert).
Sowohl die Syntax, als auch die Semantik werden nachfolgend gesondert eingeführt.
Nur wenden wir uns dann nicht mehr dem Begriff Aussage selbst zu, sondern nutzen Variablen.

#### Beispiele
Folgendes sind Beispiele für Aussagen:
- "Berlin ist die Hauptstadt von Deutschland"
- "Kein Auto ist Minzgrün"
- $3 + 4 = 0$
- $3 - 7 > -5$

Jede dieser Aussagen ist ein sprachliches Gebilde.
Die ersten Beiden sind deutsche Sätze. 
Deutsch ist eine *natürliche Sprache*.
Die anderen Beiden nutzen eine *formale Sprache*. 
Solche Formeln und andere Schreibweisen mit Symbolen können eine formale Sprache bilden.
Formale Sprachen werden im Teil [Informatik](/docs/informatik) näher behandelt.

### Syntax
Aussagenlogische *Formeln* beinhalten verschiedene Symbole und werden rekursiv definiert:

:::note Aussagenlogische Formeln

Sei $O = \{ \neg, \wedge, \vee, \rightarrow, \leftrightarrow, (, ) \}$ die Menge der *logischen Operatoren*
und $\Sigma$ eine Menge von Symbolen, die *Aussagevariablen* genannt werden.
Neben den Aussagenvariablen existieren noch die "Grundaussagen-Symbole" $\{ w, f \}$.
Um Verwechslungen zu vermeiden sollen alle drei Mengen keine gemeinsamen Elemente enthalten.

Formeln sind nun rekursiv definiert:
- $w$ und $f$ sind (atomare) Formeln
- Alle Aussagenvariablen aus $\Sigma$ sind (atomare) Formeln
- Sind $A$ und $B$ Formeln, dann sind auch $\neg A,\ (A),\ A \wedge B,\ A \vee B,\ A \rightarrow B,\ A \leftrightarrow B$ Formeln.

:::

Das letzte ist der oben erwähnte rekursive Teil der Definition.
Jede gültige Zusammensetzung der Symbole nach diesen Regeln ist wieder eine Formel.
Es erscheinen also keine Operatoren, außer die Klammern, nebeneinander, sondern es liegen am Ende immer eine Aussagenvariable oder ein "Grundaussagen-Symbol" dazwischen.

Durch das Ersetzen der Aussagenvariablen durch konkrete Aussagen, erhält man eine konkrete (zusammengesetzte) Aussage.
Es sind auch andere Symbole in Verwendung, je nach Person oder je nach Wissenschaft oder Fachgebiet.

Die Operatoren haben einen Namen und eine Sprechweise:

:::note Name und Sprechweise der Operatoren

$$
\begin{align*}
    w &: \text{"wahr"}\\
    f &: \text{"falsch"}\\
    \neg A &: \text{"nicht A" (Negation)}\\
    A \wedge B &: \text{"A und B" (Konjunktion)}\\
    A \vee B &: \text{"A oder B" (Disjunktion)}\\
    A \rightarrow B &: \text{"wenn A, dann B" ((materiale) Implikation)}\\
    A \leftrightarrow B &: \text{"A genau dann, wenn B" (Äquivalenz)}
\end{align*}
$$

:::

Bisher war es nur Syntax, d.h. rein syntaktische Gebilde ohne Bedeutung.
Einfach eine korrekte Aneinanderreihung von Symbolen.
Auch $w$ und $f$ sind erstmal nur Symbole, die allerdings wenig überraschend mit der den Worten entsprechenden Semantik belegt werden.

### Semantik
In der Aussagenlogik gilt das *Zweiwertigkeitsprinzip*:

:::note Zweiwertigkeitsprinzip

Alle Aussagen sind entweder *wahr* ($w$ oder $1$) oder *falsch* ($f$ oder $0$)

> Tertium non datur (dt.: Ein Drittes gibt es nicht)
> 
> — Satz vom ausgeschlossenem Dritten

:::

Nehmen wir eine Formel $A \vee B$ und möchten diese untersuchen, ob sie wahr oder falsch ist, so können wir dies nicht ohne weiteres tun.
Ersetzen wir die Aussagenvariablen $A$ und $B$ durch konkrete Aussagen, so können wir immerhin diesen Aussagen einen Wahrheitswert zuordnen.
Aber nach welchen Regeln soll das $\wedge$, also das *und*, behandelt werden?

Dafür müssen wir diesen syntaktischen Symbolen nun eine Bedeutung mittels einer Wahrheitstabelle eine Semantik geben.

:::note Semantik der Operatoren

$$
\begin{array}{c|c||c|c|c|c|c|c}
    A & B & \neg A & A \wedge B & A \vee B & A \rightarrow B & A \leftrightarrow B\\
    \hline\hline
    f & f & w & f & f & w & w\\
    f & w & w & f & w & w & f\\
    w & f & f & f & w & f & f\\
    w & w & f & w & w & w & w
\end{array}
$$

:::

Um Klammern zu sparen, vereinbaren wir eine Priorität von Operatoren, ähnlich wie "Punkt vor Strich".
Die Priorität der Operatoren in absteigender Reihenfolge: $\neg, \wedge, \vee, \rightarrow, \leftrightarrow$.

Eine Zeile dieser Wahrheitstabelle nennt man auch *Interpretation* oder *Belegung*.

#### Beispiele
Wählen wir folgende Aussagen $A = "3 < 5"$ und $B = "3 + 2 = 1"$.
$A$ ist eine wahre Aussage, während $B$ eine falsche Aussage ist.
Wir bilden nun die neue Aussage $A \wedge B$. 
Ist die neue Aussage wahr oder falsch?
Dazu schauen wir in die Wahrheitstafel bei der Interpretation $w, f$ und sehen, dass $f$ gilt - also ist $A \wedge B$ eine falsche Aussage.

#### Weitere Anmerkungen
Bei $\vee$ (gesprochen *oder*) ist anzumerken, dass es sich um ein *Inklusiv-Oder* handelt, d.h. die Gesamtaussage ist genau dann wahr,
wenn mindestens eine Teilaussage wahr ist.
Das Inklusiv-Oder ist wie ein "Milch *oder* Zucker" beim Kaffee zu verstehen - man kann auch beides nehmen.
Im Gegensatz dazu steht das *Exklusiv-Oder* (*Antivalenz* genannt, $\not\leftrightarrow$ geschrieben, 
"entweder $A$ oder $B$" gesprochen), das nur dann wahr wird, wenn genau eine der beiden Teilaussagen wahr ist. 
Die Antivalenz ist auch ein wichtiger Operator, der hier aber nicht näher eingeführt wird.

Die Implikation bereitet vielen am Anfang Bauchschmerzen, da sie dem umgangssprachlichen "wenn ..., dann ..." auf den ersten Blick nicht vollkommen entspricht.
Hierfür findet man im Web viele weitere Erklärungen und Beispiele, die vielleicht Abhilfe schaffen können.

*tbc*

## Prädikatenlogik (PL 1)
*tbc*