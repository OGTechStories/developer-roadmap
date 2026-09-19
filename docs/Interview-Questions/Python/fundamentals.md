---
sidebar_position: 1
---

# Python Interview Questions

## What is the difference between a list and a tuple?

Both are ordered collections, but lists are mutable while tuples are immutable. Use a tuple when the values should not change and a list when the collection needs to be updated.

## What is the difference between `==` and `is`?

`==` compares values. `is` checks whether two references point to the same object. In normal application code, use `is None` for a `None` check and `==` for value comparisons.

## What are mutable and immutable objects?

Mutable objects can be changed after creation, such as lists and dictionaries. Immutable objects cannot be changed in place, such as strings, integers, and tuples. This distinction matters when objects are shared between functions.

## What is a dictionary comprehension?

A dictionary comprehension creates a dictionary from an iterable in a compact, readable form:

```python
squares = {number: number * number for number in range(5)}
```
