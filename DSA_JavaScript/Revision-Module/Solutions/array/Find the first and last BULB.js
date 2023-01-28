/*
Find the first and last BULB -2:10:8
Description

Given a series of BULBS in a series, the initial state of the BULBS is that they are in ON-state. You are given an array of numbers denoting we will be flipping the A[i] BULB, Meaning if that BULB was in ON state we switch-OFF, else if it was in OFF state we switch it ON. After applying each operation you have to give answers to two queries.

1. What is the first bulb going from left to right order (1 to N order), that is turned ON?

2. What is the first bulb going from right to left order (N to 1 order), that is turned ON?

(Note: Note if there is no such bulb found in a particular order then return -1.)


Input
Line 1: Single Integer N.

Line 2. N integers are separated by a single space.

//input
6
1 2 2 6 5 1

//output
2 6
3 6
2 6
2 5
2 4
1 4
*/

