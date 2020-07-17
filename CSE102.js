
function fibonacci(num, memo) {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return 1;

    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

function print_table(number){
    var i = 0
    var fib_holder = 0
    for (i; i < number ; i++){
        var printer = ""
        if(i > 0){
            var fib_holder = fib_holder + fibonacci(i + 2)
            printer = printer.concat((fib_holder).toString())
            var to_sum_up = fib_holder
            for (j=0; j < i; j++){
                to_sum_up = to_sum_up + 2
                printer = printer.concat(" ", (to_sum_up).toString())
            }
        }else {
            fib_holder = 1
            printer = printer.concat((fib_holder).toString())
        }
        console.log(printer)
        }
}

print_table(4)