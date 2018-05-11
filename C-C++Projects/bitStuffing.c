#include "stdio.h"
#include "conio.h"

void main(void){
    int i=0,count=0;
    char a[100];
    printf("enter the bits : ");
    scanf("%s",a);
    int len = sizeof(a) / sizeof(a[0]);
    printf("\nAfter bit stuffing \n");
    printf("01111110 ");

    for(i=0;i < 16; i++){
        if(a[i]=='1')
            count++;
        printf("%c",a[i]);
        if(count==5){
            printf("0");
            count=0;
        }
    }
    printf("01111110");
    getch();
}