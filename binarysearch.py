a = [10,14,19,26,27,31,33,35,42,44]
f = int(input('Please enter search value : '))
l = 0
h = len(a)-1
m = int(l+(h-l)/2)
if f not in a :
    print('Not found')
else:
    while True:
        if f == a[l]:
            print('found at '+str(l))
            break
        if f == a[h]:
            print('found at '+str(h))
            break
        if f == a[m]:
            print('found at '+str(m))
            break

        if f > a[m]:
            l = m+1
        if f < a[m]:
            h = m-1
        m = int(l+(h-l)/2)
print('done with complexity on O(logn)')