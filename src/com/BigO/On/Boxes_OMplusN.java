package com.BigO.On;

public class Boxes_OMplusN {

    public static void main(String[] args) {
        int[] boxes = {1, 2, 3, 4, 5};
        int[] boxes2 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        printBoxes(boxes, boxes2); //O(m+n)
    }

    public static void printBoxes(int[] boxes, int[] boxes2) {
        for (int box : boxes) {
            System.out.println(box);
        } //O(m)

        for (int box : boxes2) {
            System.out.println(box);
        } //O(n)
    }
}
