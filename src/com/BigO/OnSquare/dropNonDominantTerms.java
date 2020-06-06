package com.BigO.OnSquare;

public class dropNonDominantTerms {

    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        printAllNumbersThenAllPairSums(numbers); //O(n + n^2) --> O(n^2)
    }

    public static void printAllNumbersThenAllPairSums(int[] numbers) {
        System.out.println("These are the numbers:");
        for (int i=0; i<numbers.length; i++) {
            System.out.println(numbers[i]);
        } // O(n)

        System.out.println("And their Sums:");
        for (int i=0; i<numbers.length; i++) {
            for (int j=0; j<numbers.length; j++) {
                System.out.println(numbers[i] + "+" + numbers[j] + "=" + (numbers[i] + numbers[j]));
            }
        } //O(n^2)
    }
}
