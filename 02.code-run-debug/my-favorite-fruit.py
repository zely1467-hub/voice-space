import time
def p(s): print(s, end="", flush=True)
def w(n, e=False, d=True):
    for i in range(n):
        if d: p(".")
        time.sleep(0.25)
    if e: p("!")
p("Input the favorite fruit: ")
myFavorite = input()
p("\nMy favorite fruit is")
w(9)
p(f" {myFavorite}")
w(3, True)
p("\n\n")
