package com.Algorithms.SearchingAndTraversal;

public class BinarySearchRecursive {

    public static void main(String[] args) {
        int[] array = {1, 5, 33, 42, 78, 88, 90, 92, 99};
        int number = 2;
        double result = binarySearchRecursive(array, number, 0, array.length - 1);
        if (result == -1) {
            System.out.println("Element not found!");
        } else {
            System.out.println("Element found at location: " + result);
        }
    }

    public static double binarySearchRecursive(int[] array, int num, int low, int high) {
        if (low > high)
            return -1;
        int mid = (low + high)/2;
        if (num < array[mid])
            return binarySearchRecursive(array, num, low, mid - 1);
        else if (num > array[mid])
            return binarySearchRecursive(array, num, mid + 1, high);
        else
            return mid;
    }

}
