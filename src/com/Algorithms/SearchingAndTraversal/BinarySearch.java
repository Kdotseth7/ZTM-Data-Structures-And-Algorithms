package com.Algorithms.SearchingAndTraversal;

public class BinarySearch {

    public static void main(String[] args) {
        int[] array = {1, 5, 33, 42, 78, 88, 90, 96, 99};
        int number = 5;
        double result = binarySearch(array, number);
        if (result == -1) {
            System.out.println("Element not found!");
        } else {
            System.out.println("Element found at location: " + result);
        }
    }

    public static double binarySearch(int[] array, int num) {
        int low = 0;
        int high = array.length - 1;
        int mid;
        while (low <= high) {
            mid = (low + high)/2;
            if (num < array[mid])
                high = mid - 1;
            else if (num > array[mid])
                low = mid + 1;
            else
                return mid;
        }
        return -1;
    }

}
