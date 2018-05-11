#include <stdio.h>
#include <conio.h>
#define MAX_NAME_SIZE 256

void simple_welcome(void){
    char buffer[32]; // to hold the player's name
    printf("Please enter your name: ");
    fgets(buffer, MAX_NAME_SIZE, stdin); // input from 'Standard In'
    printf("Welcome ");
    printf(buffer);
    return;
}
int main(void){
    char some_space[80];
    simple_welcome();
    return 0;
}