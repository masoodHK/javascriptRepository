#include <stdio.h>
#include <conio.h>
#include <math.h>
//Called Functions
int someFunction(int n1, int n2);
//Function Descriptions
int someFunction(int n1, int n2){
     for(int i = 1; i <= n2; i++){
         n1 = n1 + n2;
     }
     return n1;
}
//Main Program
void main(void){
     int n1, n2;
     scanf("%d%d",&n1, &n2);
     int sum = 0;
     sum=someFunction(n1,n2);
     printf("The sum of %d and %d is %d",n1, n2, sum);
}