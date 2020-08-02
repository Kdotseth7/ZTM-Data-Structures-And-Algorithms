package com.Algorithms.SearchingAndTraversal;

public class LinearSearch {

    public static void main(String[] args) {
        int[] array = {1, 5, 88, 33, 12, 78, 55, 45, 90};
        int number = 90;
        int result = linearSearch(array, number);
        if (result == -1) {
            System.out.println("Element not found!");
        } else {
            System.out.println("Element found at location: " + result);
        }
    }

    //TC: O(n)
    public static int linearSearch(int[] array, int num) {
        int i=0;
        while (i < array.length) {
            if (array[i] == num)
                return i;
            i++;
        }
        return -1;
    }

}
